const boardsInitialData = [
  {
    id: 1,
    title: 'test board 1',
    description: 'test description',
    columns: [
      {
        id: 1,
        title: 'First Column',
        tasks: [
          {
            id: 1,
            content: '111',
          },
          {
            id: 2,
            content: '222',
          },
          {
            id: 3,
            content: '333',
          },
        ]
      },
      {
        id: 2,
        title: 'Second Column',
        tasks: [
          {
            id: 4,
            content: '444'
          },
          {
            id: 5,
            content: '555'
          },
          {
            id: 6,
            content: '666'
          },
        ]
      },
      {
        id: 3,
        title: 'Third Column',
        tasks: [
          {
            id: 7,
            content: '777'
          },
          {
            id: 8,
            content: '888'
          },
        ]
      },
    ]
  },
  {
    id: 2,
    title: 'test board 2',
    description: 'test description',
  },
];

export default boardsInitialData;
