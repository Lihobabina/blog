export type ArticleProps = {
    id: number
    img: string
    category:string
    desc: string
    authorImg: string
    author: string
    text: string
    date: string
    popular?:string
    articleText: string
}
 const articlesArray: ArticleProps[] = [
    {
        id: 1,
        img:  "/ArticleImages/1.jpg",
        category:"culture",
        desc: "Rerum aperiam molestias, dolorum vel soluta",
        authorImg:'/ArticleImages/author-1.jpg',
        author:"Claire Payne",
        text:"Labore nonumes te vel, vis id errem tantas tempor. Solet quidam salutatus at quo. Tantas comprehensam te sea, usu sanctus similique ei",
        date:'December 11, 2019',
        articleText:'Expetendis complectitur at vix, lorem quaeque apeirian Adhuc euripidis no qui. Eam et liber concludaturque, feugiat assentior posidonium pri ut. Case justo ut est, ex dolores aliquando vix. Minimum ocurreret constituam id sea, ignota iisque epicuri sed ne. Ne nec quem feugiat, ad ius iisque commodo efficiantur, his enim illud quodsi an. te sea, vel te civibus officiis disputationi. Appellantur mediocritatem est id. Pro te nisl invidunt voluptatibus. Aperiam mediocrem sea ex, te mea legere timeam vituperatoribus. Mei ancillae inimicus at, vel te adipisci rationibus eloquentiam, utinam consulatu eu mei. Cu usu duis semper aperiam.'
    },
{
    id: 2,
    img:  "/ArticleImages/2.jpg",
    category:"destinations",
    desc: "Amet aeterno gubergren ne per illum tincidunt",
    authorImg:'/ArticleImages/author-2.jpg',
    author:"Lucas ",
    text:"Labore nonumes te vel, vis id errem tantas tempor. Solet quidam salutatus at quo. Tantas comprehensam te sea, usu sanctus similique ei",
    date:'December 11, 2019',
    articleText:'Expetendis complectitur at vix, lorem quaeque apeirian te sea, vel te civibus officiis disputationi. Appellantur mediocritatem est id. Pro te nisl invidunt voluptatibus. Aperiam mediocrem sea ex, te mea legere timeam vituperatoribus. Mei ancillae inimAdhuc euripidis no qui. Eam et liber concludaturque, feugiat assentior posidonium pri ut. Case justo ut est, ex dolores aliquando vix. Minimum ocurreret constituam id sea, ignota iisque epicuri sed ne. Ne nec quem feugiat, ad ius iisque commodo efficiantur, his enim illud quodsi an.icus at, vel te adipisci rationibus eloquentiam, utinam consulatu eu mei. Cu usu duis semper aperiam.'
},
{
    id: 3,
    img:  "/ArticleImages/3.jpg",
    category:"photography",
    desc: "Rerum aperiam molestias, dolorum vel soluta",
    authorImg:'/ArticleImages/author-1.jpg',
    author:"Claire Payne" ,
    text:"Labore nonumes te vel, vis id errem tantas tempor. Solet quidam salutatus at quo. Tantas comprehensam te sea, usu sanctus similique ei",
    date:'December 11, 2019',
    popular:'',
    articleText:'Expetendis complectitur at vix, lorem quaeque apeirian te sea, vel te civibus officiis disputationi. Appellantur mediocritatem est id. Pro te nisl invidunt voluptatibus. Aperiam mediocrem sea ex, te mea legere timeam vituperatoribus. Mei ancillaeAdhuc euripidis no qui. Eam et liber concludaturque, feugiat assentior posidonium pri ut. Case justo ut est, ex dolores aliquando vix. Minimum ocurreret constituam id sea, ignota iisque epicuri sed ne. Ne nec quem feugiat, ad ius iisque commodo efficiantur, his enim illud quodsi an. inimicus at, vel te adipisci rationibus eloquentiam, utinam consulatu eu mei. Cu usu duis semper aperiam.'
},
{
    id: 4,
    img:  "/ArticleImages/4.jpg",
    category:"destinations",
    desc: "An quas disputationi mea Legere libris scripta",
    authorImg:'/ArticleImages/author-1.jpg',
    author:"Claire Payne" ,
    text:'Quo natum nemore putant in, his te case habemus. Nulla detraxit explicari in vim. Id eam magna omnesque. Per cu dicat urbanitas,',
    date:'November 4, 2019',
    articleText:'ExpetendiAdhuc euripidis no qui. Eam et liber concludaturque, feugiat assentior posidonium pri ut. Case justo ut est, ex dolores aliquando vix. Minimum ocurreret constituam id sea, ignota iisque epicuri sed ne. Ne nec quem feugiat, ad ius iisque commodo efficiantur, his enim illud quodsi an.s complectitur at vix, lorem quaeque apeirian te sea, vel te civibus officiis disputationi. Appellantur mediocritatem est id. Pro te nisl invidunt voluptatibus. Aperiam mediocrem sea ex, te mea legere timeam vituperatoribus. Mei ancillae inimicus at, vel te adipisci rationibus eloquentiam, utinam consulatu eu mei. Cu usu duis semper aperiam.'
},
{
    id: 5,
    img:  "/ArticleImages/5.jpg",
    category:"photography",
    desc: "Amet aeterno gubergren ne per illum tincidunte",
    authorImg:'/ArticleImages/author-1.jpg',
    author:"Claire Payne" ,
    text:"Labore nonumes te vel, vis id errem tantas tempor. Solet quidam salutatus at quo. Tantas comprehensam te sea, usu sanctus similique ei",
    date:'December 11, 2019',
    articleText:'Expetendis complectitur at vix, lorem quaeque apeirian te sea, vel te civibus officiis disputationi. Appellantur mediocritatem est id. Pro te nisl invidunt voluptatibus. Aperiam mediocrem sea ex, te mea legere timeam vituperatoribus. MeiAdhuc euripidis no qui. Eam et liber concludaturque, feugiat assentior posidonium pri ut. Case justo ut est, ex dolores aliquando vix. Minimum ocurreret constituam id sea, ignota iisque epicuri sed ne. Ne nec quem feugiat, ad ius iisque commodo efficiantur, his enim illud quodsi an. ancillae inimicus at, vel te adipisci rationibus eloquentiam, utinam consulatu eu mei. Cu usu duis semper aperiam.'

},
{
    id: 6,
    img:  "/ArticleImages/6.jpg",
    category:"destinations",
    desc: "Eu cum Nibh everti vivendo ius ne",
    authorImg:'/ArticleImages/author-2.jpg',
    author:"Lucas ",
    text:"Patrioque assentior ea vim. Volutpat salutandi ex his, cu sea soluta melius gubergren, has latine reprehendunt ea. Has appetere electram persequeris eu.",
    date:'May 25, 2019',
    popular:'',
    articleText:'Expetendis complectitur at vix, lorem quaeque apeirian te sea, vel te civibus officiis disputationi. Appellantur mediocritatem est id. Pro te nisl invidunt voluptatibus. Aperiam mediocrem sea ex, te mea legere timeam vituperatoribus. Mei ancillAdhuc euripidis no qui. Eam et liber concludaturque, feugiat assentior posidonium pri ut. Case justo ut est, ex dolores aliquando vix. Minimum ocurreret constituam id sea, ignota iisque epicuri sed ne. Ne nec quem feugiat, ad ius iisque commodo efficiantur, his enim illud quodsi an.ae inimicus at, vel te adipisci rationibus eloquentiam, utinam consulatu eu mei. Cu usu duis semper aperiam.'
},
{
    id: 7,
    img:  "/ArticleImages/7.jpg",
    category:"culture",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    authorImg:'/ArticleImages/author-1.jpg',
    author:"Claire Payne" ,
    text:"Labore nonumes te vel, vis id errem tantas tempor. Solet quidam salutatus at quo. Tantas comprehensam te sea, usu sanctus similique ei",
    date:'December 11, 2019',
    popular:'',
    articleText:'Expetendis complectitur at vix, lorem quaeque apeirian te sea, vel te civibus officiis disputationi. Appellantur mediocritatem est id. Pro te nisl invidunt voluptatibus. Aperiam mediocrem sea ex, te mea legere timeam vituperatoribus. Mei anciAdhuc euripidis no qui. Eam et liber concludaturque, feugiat assentior posidonium pri ut. Case justo ut est, ex dolores aliquando vix. Minimum ocurreret constituam id sea, ignota iisque epicuri sed ne. Ne nec quem feugiat, ad ius iisque commodo efficiantur, his enim illud quodsi an.llae inimicus at, vel te adipisci rationibus eloquentiam, utinam consulatu eu mei. Cu usu duis semper aperiam.'
},
{
    id: 8,
    img:  "/ArticleImages/8.jpg",
    category:"destinations",
    desc: "Amet aeterno gubergren ne per illum tincidunte",
    authorImg:'/ArticleImages/author-2.jpg',
    author:"Lucas ",
    text:'Ius ea rebum nostrum offendit. Per in recusabo facilisis, est ei choro veritus gloriatur. Has ut dicant fuisset percipit. At usu iusto',
    date:"December 18, 2017 ",
    articleText:'Expetendis complectitur at vix, lorem quaeque apeirian te sea, vel te civibus officiis disputationi. Appellantur mediocritateAdhuc euripidis no qui. Eam et liber concludaturque, feugiat assentior posidonium pri ut. Case justo ut est, ex dolores aliquando vix. Minimum ocurreret constituam id sea, ignota iisque epicuri sed ne. Ne nec quem feugiat, ad ius iisque commodo efficiantur, his enim illud quodsi an.m est id. Pro te nisl invidunt voluptatibus. Aperiam mediocrem sea ex, te mea legere timeam vituperatoribus. Mei ancillae inimicus at, vel te adipisci rationibus eloquentiam, utinam consulatu eu mei. Cu usu duis semper aperiam.'
},
{
    id: 9,
    img:  "/ArticleImages/9.jpg",
    category:"photography",
    desc: "Eu cum Nibh everti vivendo ius ne",
    authorImg:'/ArticleImages/author-1.jpg',
    author:"Claire Payne" ,
    text:"Labore nonumes te vel, vis id errem tantas tempor. Solet quidam salutatus at quo. Tantas comprehensam te sea, usu sanctus similique ei",
    date:'December 11, 2019',
    articleText:'Expetendis complectitur at vix, lorem quaeque apeirian te sea, vel te civibus officiis disputationi. Appellantur mediocritatem est id. Pro te nisl invidunt voluptatibus. Aperiam mediocrem sea ex, te mea legere timeam vituperatoribus. MeiAdhuc euripidis no qui. Eam et liber concludaturque, feugiat assentior posidonium pri ut. Case justo ut est, ex dolores aliquando vix. Minimum ocurreret constituam id sea, ignota iisque epicuri sed ne. Ne nec quem feugiat, ad ius iisque commodo efficiantur, his enim illud quodsi an. ancillae inimicus at, vel te adipisci rationibus eloquentiam, utinam consulatu eu mei. Cu usu duis semper aperiam.'
},
{
    id: 10,
    img:  "/ArticleImages/2.jpg",
    category:"culture",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    authorImg:'/ArticleImages/author-1.jpg',
    author:"Claire Payne" ,
    text:"Labore nonumes te vel, vis id errem tantas tempor. Solet quidam salutatus at quo. Tantas comprehensam te sea, usu sanctus similique ei",
    date:'December 11, 2019',
    articleText:'Expetendis complectitur at vix, lorem quaeque apeirian te sea, vel te civibus officiis disputationi. Appellantur mediocritatem est id. Pro te nisl invidunt voluptatibus. Aperiam mediocrem sea ex, te mea legere timeam vituperatoribus. Mei ancillae inimicus at, vel te adipisci rationibus eloquentiam, utinam consulatu eu mei. Cu usu duis semper aperiam.'
},
{
    id: 11,
    img:  "/ArticleImages/4.jpg",
    category:"photography",
    desc: "Eu cum Nibh everti vivendo ius ne",
    authorImg:'/ArticleImages/author-2.jpg',
    author:"Lucas ",
    text:"Labore nonumes te vel, vis id errem tantas tempor. Solet quidam salutatus at quo. Tantas comprehensam te sea, usu sanctus similique ei",
    date:'December 11, 2019',
    articleText:'Expetendis complectitur at vix, lorem quaeque apeirian te sea, vel te civibus officiis disputationi. Appellantur mediocritatem est id. Pro te nisl invidunt voluptatibus. Aperiam mediocrem sea ex, te mea legere timeam vituperatoribus. Mei ancillae inimicus at, vel te adipisci rationibus eloquentiam, Adhuc euripidis no qui. Eam et liber concludaturque, feugiat assentior posidonium pri ut. Case justo ut est, ex dolores aliquando vix. Minimum ocurreret constituam id sea, ignota iisque epicuri sed ne. Ne nec quem feugiat, ad ius iisque commodo efficiantur, his enim illud quodsi an.utinam consulatu eu mei. Cu usu duis semper aperiam.'
},
{
    id: 12,
    img:  "/ArticleImages/6.jpg",
    category:"culture",
    desc: "Laboriosam error temporibus architecto facere eius illo optio quas amet non porr",
    authorImg:'/ArticleImages/author-1.jpg',
    author:"Claire Payne" ,
    text:"Labore nonumes te vel, vis id errem tantas tempor. Solet quidam salutatus at quo. Tantas comprehensam te sea, usu sanctus similique ei",
    date:'December 11, 2019',
    articleText:'Expetendis complectitur at vix, lorem quaeque apeirian te sea, vel te civibus officiis disputationi. Appellantur mediocritatem est id. Pro te nisl inviduvnt voluptatibus. Aperiam mediocrem sea ex, te mea legere timeam vituperatoribus. Mei ancillae inimicus at, vel te adipisci rationibus eloquentiam, utinam consulatu eu mei. Cu usu duis semper aperiam.'
},

]
export const getProductsObject = (array:ArticleProps[])=>array.reduce((object, product)=>({
    ...object,
    [product.id]:product
}),{})
export default articlesArray
