export async function get() {
    console.log(JSON.stringify([
        {
            id: '301',
            name: '301/501/1001',
            rules: 'https://shotdarts.com/blogs/discover/a-starter-for-5-basic-dart-games-you-should-know',
            settings: [
                {
                    id: '301_round-scores',
                    name: 'Количество очков в раунде',
                    type: 'select',
                    options: [
                        {
                            id: '301_round-scores_301',
                            name: '301'
                        },
                        {
                            id: '301_round-scores_501',
                            name: '501'
                        },
                        {
                            id: '301_round-scores_1001',
                            name: '1001'
                        }
                    ],
                    default: '301_round-scores_301'
                },
                {
                    id: '301_rounds-to-win',
                    name: 'Раундов для победы',
                    type: 'number',
                    min: '1',
                    max: '9',
                    default: '1'
                }
            ],
            playersInitialData: {
                score: 0,
                roundsWon: 0,
                turn: [
                    {
                        value: 0,
                        multiple: 1
                    },
                    {
                        value: 0,
                        multiple: 1
                    },
                    {
                        value: 0,
                        multiple: 1
                    }
                ]
            }
        }
    ]))

    return {
        body: JSON.stringify([
            {
                id: '301',
                name: '301/501/1001',
                rules: 'https://shotdarts.com/blogs/discover/a-starter-for-5-basic-dart-games-you-should-know',
                settings: [
                    {
                        id: '301_round-scores',
                        name: 'Количество очков в раунде',
                        type: 'select',
                        options: [
                            {
                                id: '301_round-scores_301',
                                name: '301'
                            },
                            {
                                id: '301_round-scores_501',
                                name: '501'
                            },
                            {
                                id: '301_round-scores_1001',
                                name: '1001'
                            }
                        ],
                        default: '301_round-scores_301'
                    },
                    {
                        id: '301_rounds-to-win',
                        name: 'Раундов для победы',
                        type: 'number',
                        min: '1',
                        max: '9',
                        default: '1'
                    }
                ],
                playersInitialData: {
                    score: 0,
                    roundsWon: 0,
                    turn: [
                        {
                            value: 0,
                            multiple: 1
                        },
                        {
                            value: 0,
                            multiple: 1
                        },
                        {
                            value: 0,
                            multiple: 1
                        }
                    ]
                }
            }
        ])
    };
}