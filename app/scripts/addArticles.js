/*//mongo localhost .\addArticles.js
var coll = db.getMongo().getDB('blogbook-dev').articles;
coll.drop();

coll.insert(
{
    user: ObjectId('55dc9c03aabf44e201217082'),
    contentUrl: 'http://yeoman.io/',
    categories: ['politics'],
    tags: ['españa','cataluña'],
    title: 'Una nación de pie',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
    imageUrls: ['http://i.ytimg.com/vi/RpPdaQJucRY/hqdefault.jpg'],
    kViews: 100,
    kLikes: 15,
    kShared: 3,
    created: ISODate('2015-08-25T16:48:14.791Z')
});
coll.insert(
{
    user: ObjectId('55dc9c03aabf44e201217082'),
    contentUrl: 'http://yeoman.io/',
    categories: ['kitchen'],
    tags: ['leon','juan'],
    title: 'Mi primer Blog. Cocinado!',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
    imageUrls: ['http://sp2.fotolog.com/photo/50/61/10/el_crower/1283065849914_f.jpg','https://pbs.twimg.com/profile_images/378800000796594936/ea4bd1e793f8b8adff368f03c064a2fd.jpeg'],
    kViews: 1,
    kLikes: 15,
    kShared: 785,
    created: ISODate('2015-08-25T16:48:14.791Z')
});
coll.insert(
{
    user: ObjectId('55dc9c03aabf44e201217082'),
    contentUrl: 'http://yeoman.io/',
    categories: ['politics'],
    tags: ['peroo','gato','animal'],
    title: 'Un país revuelto',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
    imageUrls: ['http://www.activohiphop.com/img/graffiti/cartagena2_14_poli124.jpg'],
    kViews: 10,
    kLikes: 125,
    kShared: 13,
    created: ISODate('2015-08-25T16:48:14.791Z')
});
coll.insert(
{
    user: ObjectId('55dc9c03aabf44e201217082'),
    contentUrl: 'http://yeoman.io/',
    categories: ['sports'],
    tags: ['messi','forlan'],
    title: 'Noventa minutos y medio',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
    imageUrls: [],
    kViews: 1760,
    kLikes: 0,
    kShared: 190,
    created: ISODate('2015-08-25T16:48:14.791Z')
});
coll.insert(
{
    user: ObjectId('55dc9c03aabf44e201217082'),
    contentUrl: 'http://yeoman.io/',
    categories: ['fashion'],
    tags: ['la romería'],
    title: 'Rumipunco Fashion Week',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
    imageUrls: ['https://s-media-cache-ak0.pinimg.com/736x/9c/92/3c/9c923ca3229d37c3ae70bac98e5ee7b9.jpg','http://i.ytimg.com/vi/BvdeA-xdNME/hqdefault.jpg','http://sp7.fotolog.com/photo/7/52/20/freacksteriuz/1291652464245_f.jpg'],
    kViews: 100,
    kLikes: 1500,
    kShared: 0,
    created: ISODate('2015-08-27T18:14:38.943Z')
});
coll.insert(
{
    user: ObjectId('55dc9c03aabf44e201217082'),
    contentUrl: 'http://yeoman.io/',
    categories: ['tech'],
    tags: ['teclado'],
    title: 'Salón del invento de vilanova',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
    imageUrls: ['http://o1.metroflog.com/pictures/200/85/5/764585200_OXJGAGLBVCTHIMU.jpg'],
    kViews: 1000,
    kLikes: 150,
    kShared: 32,
    created: ISODate('2015-08-27T18:14:38.943Z')
});
*/