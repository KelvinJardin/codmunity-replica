'use client';

import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

interface TabPanelProps {
    index: number;
    hidden: boolean;
    children?: React.ReactNode;
}

interface TabbedContentProps {
    contents: { heading: string; content: string }[],
}

const TabPanel = ({index, hidden, children}: TabPanelProps): React.JSX.Element => (
    <div
        id={`tab-panel-${index}`}
        hidden={hidden}
        aria-labelledby={`tab-${index}`}
        role="tabpanel"
    >
        {children}
    </div>
);

// We should probably use a theme for these colours
const grey = 'rgb(156 163 175)';
const green = 'rgb(132 204 22)';

const TabbedContent = ({contents = []}: TabbedContentProps): React.JSX.Element => {
    const [currentTab, setCurrentTab] = useState(0); // Start with the first tab

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => setCurrentTab(newValue);

    return (
        <Box>
            <Tabs
                value={currentTab}
                onChange={handleChange}
                sx={{
                    '& .MuiTabs-indicator': {
                        backgroundColor: green,
                    },
                }}
            >
                {contents.map(({heading}, index) => (
                    <Tab
                        key={`tab-${heading}`}
                        label={heading}
                        aria-controls={`tab-panel-${index}`}
                        // Mui/Tab use the `sx` prop to style the tabs
                        sx={{
                            color: grey,
                            '&.Mui-selected': {
                                color: green,
                            },
                        }}
                    />
                ))}
            </Tabs>
            {contents.map(({heading, content}, index) => (
                <TabPanel
                    key={`content-${heading}`}
                    index={index}
                    hidden={currentTab !== index}
                >
                    {content}
                </TabPanel>
            ))}
        </Box>
    );
};

export default TabbedContent;
