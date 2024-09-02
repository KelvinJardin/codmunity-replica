const games = [
    {
        key: "Warzone",
        title: "Warzone",
        description: "Call of Duty: Warzone"
    },
    {
        key: "ColdWar",
        title: "ColdWar",
        description: "Call of Duty: Black Ops Cold War"
    },
    {
        key: "ModernWarfare",
        title: "ModernWarfare",
        description: "Call of Duty: Modern Warfare"
    },
    // mock data, replace it with actual data from db
];

const getGameIdList = async () => {
    return games.map(({key}) => {
        return {
            params: {
                Game: key,
            },
        };
    });
};

const getGameDetails = async (key) => {
    return games.find((game) => game.key === key);
};

export async function getStaticPaths() {
    const paths = await getGameIdList();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getGameDetails(params.key);

    return {
        props: {
            postData,
        },
    };
}

export default function Game({ postData }) {
    return (
        <div>
            <h1>{postData.title}</h1>
            <p>{postData.description}</p>
        </div>
    );
}
