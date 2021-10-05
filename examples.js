const movies = [
  {
    name: 'Godfather 1',
    year: '1972',
    description: ' The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. ',
    director: 'Francis Ford Coppola',
    torrent: 'magnet:?xt=urn:btih:5E915039C619366E490D08DB3FFED21F3A3AE84A&amp;dn=The+Godfather+1972+1080P&amp;tr=udp://open.demonii.com:1337/announce&amp;tr=udp://tracker.openbittorrent.com:80&amp;tr=udp://tracker.coppersurfer.tk:6969&amp;tr=udp://glotorrents.pw:6969/announce&amp;tr=udp://tracker.opentrackr.org:1337/announce&amp;tr=udp://torrent.gresille.org:80/announce&amp;tr=udp://p4p.arenabg.com:1337&amp;tr=udp://tracker.leechers-paradise.org:6969',
  },
  {
    name: "1917",
    year: '2019',
    description: ' As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap. ',
    director: 'Sam Mendes',
    torrent: 'https://www.baixarfilmetorrent.net/1917-2019-torrent-dublado-e-legendado/',
  },
  {
    name: 'Toy story',
    year: '1995',
    description: '  A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boys room.  ',
    director: 'John Lasseter',
    torrent: 'magnet:?xt=urn:btih:71c36367f0416d36dc1b7712c3f662eba65203b6&dn=Toy+Story+%281995%29+720p+BrRip+x264+-+500MB+-+YIFY&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
  },
  {
    name: "Monty Python's Life of Brian",
    year: '1979',
    description: ' Born on the original Christmas in the stable next door to Jesus, Brian of Nazareth spends his life being mistaken for a messiah. ',
    director: 'Terry Jones',
    torrent: 'magnet:?xt=urn:btih:a1c3f4ef08919be78211aa354b3ffb9f69be5921&dn=Monty+Python%5C%27s+Life+of+Brian+%281979%29.DVDRip.XviD.Ekolb&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
  },
  {
    name: "Bacurau",
    year: '2019',
    description: 'After the death of her grandmother, Teresa comes home to her matriarchal village in a near-future Brazil to find a succession of sinister events that mobilizes all of its residents.',
    director: 'Juliano Dornelles and Kleber Mendonça Filho',
    torrent: 'magnet:?xt=urn:btih:2B68B4DFEE0D1CC403D6B5B7A08E745FA45CB603&dn=Once%20Upon%20A%20Time%20...%20In%20Hollywood%20%282019%29%20%5bBluRay%5d%20%5b1080p%5d%20%5bYTS.LT%5d&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.to%3a2980%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337&tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=ud',
  },
  {
    name: "Avatar",
    year: '2009',
    description: '  A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home. ',
    director: 'James Cameron',
    torrent: 'magnet:?xt=urn:btih:1fa82d9959257afc7d849d7b014bdd2f76bd2c05&dn=Avatar+-+Extended+Collectors+Edition+%282009%29+720p+BrRip+x264+-+YI&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
  },
  {
    name: "Gran Torino",
    year: '2008',
    description: ' Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, Thao Lor, a Hmong teenager who tried to steal Kowalskis prized possession: a 1972 Gran Torino.',
    director: 'Clint Eastwood',
    torrent: 'magnet:?xt=urn:btih:5b9761450a89f98ff10d4424c2914b5cebf7655f&dn=Gran+Torino+%282008%29+1080p+BrRip+x264+-+1.55GB+-+YIFY&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
  },
  {
    name: "Ava",
    year: '2020',
    description: 'Ava is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.',
    director: 'Tate Taylor',
    torrent: 'https://www.baixarfilmetorrent.net/ava-2020-torrent-dublado-e-legendado/',
  },
  {
    name: "Mulan",
    year: '2020',
    description: 'A young Chinese maiden disguises herself as a male warrior in order to save her father.',
    director: 'Niki Caro',
    torrent: 'https://www.baixarfilmetorrent.net/mulan-2020-torrent-dublado-e-legendado/',
  },
  {
    name: "Black Widow",
    year: '2021',
    description: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.',
    director: 'Cate Shortland',
    torrent: 'https://www.baixafilme.net/viuva-negra-2021-torrent-dublado-e-legendado/',
  },
  {
    name: "Once Upon a Time... In Hollywood",
    year: '2019',
    description: 'A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywoods Golden Age in 1969 Los Angeles.',
    director: 'Quentin Tarantino',
    torrent: 'https://www.baixafilme.net/era-uma-vez-em-hollywood-2019-torrent-dublado-e-legendado/',
  },
];


module.exports = movies;
