import TabbedContent from '@/components/Layout/TabbedContent';

export default async function Creators() {
    // Simple unstyled usage before we have any content
    return (
        <TabbedContent
            contents={[
                {
                    heading: 'Loadouts',
                    content: 'Loadouts',
                },
                {
                    heading: 'Creators',
                    content: 'Creators',
                },
                {
                    heading: 'Feed',
                    content: 'Feed',
                },
            ]}
        />
    );
};
