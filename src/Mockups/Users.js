import ProfilePic from './../assests/profile-pic.jpg';

const Users = [
  {
    name: 'Manu Alpuente',
    currentStatus: 'online',
    desc: 'User description lorem ipsum dolor sit amet.',
    pic: ProfilePic,
    data: [
      {
        name: 'Fake data 01',
        value: .72,
        change: 'up'
      },
      {
        name: 'Fake data 02',
        value: .91,
        change: 'up'
      },
      {
        name: 'Fake data 03',
        value: .37,
        change: 'down'
      },
    ],
    resume: {
      value: 8.7,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  },
  {
    name: 'José Rodríguez',
    currentStatus: 'online',
    desc: 'User description lorem ipsum dolor sit amet.',
    pic: 'https://picsum.photos/240?joseRodri',
    data: [
      {
        name: 'Fake data 01',
        value: .33,
        change: 'down'
      },
      {
        name: 'Fake data 02',
        value: .91,
        change: 'down'
      },
      {
        name: 'Fake data 03',
        value: .6,
        change: 'up'
      },
    ],
    resume: {
      value: 4.8,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  },
  {
    name: 'John Doe',
    currentStatus: 'offline',
    desc: 'User description lorem ipsum dolor sit amet.',
    pic: 'https://picsum.photos/240?johnDoe',
    data: [
      {
        name: 'Fake data 01',
        value: .31,
        change: 'up'
      },
      {
        name: 'Fake data 02',
        value: .87,
        change: 'down'
      },
      {
        name: 'Fake data 03',
        value: .54,
        change: 'up'
      },
    ],
    resume: {
      value: 6.4,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  },
  {
    name: 'Jane Williams',
    currentStatus: 'online',
    desc: 'User description lorem ipsum dolor sit amet.',
    pic: 'https://picsum.photos/240?jane',
    data: [
      {
        name: 'Fake data 01',
        value: .89,
        change: 'down'
      },
      {
        name: 'Fake data 02',
        value: .64,
        change: 'up'
      },
      {
        name: 'Fake data 03',
        value: .47,
        change: 'up'
      },
    ],
    resume: {
      value: 7.8,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  }
]

export default Users;