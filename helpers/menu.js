const MENU = [
{
  "key": 0,
  "title": "Array",
  "visible": true,
  "content": [
    {
      "key": "0:0",
      "name": "_.chunk",
      "href": "#chunk",
    },
    {
      "key": "0:1",
      "name": "_.compact",
      "href": "#compact",
    },
    {
      "key": "0:2",
      "name": "_.concat",
      "href": "#concat",
    },
    {
      "key": "0:3",
      "name": "_.difference",
      "href": "#difference",
    },
    {
      "key": "0:4",
      "name": "_.differenceBy",
      "href": "#differenceBy",
    },
    {
      "key": "0:5",
      "name": "_.differenceWith",
      "href": "#differenceWith",
    },
    {
      "key": "0:6",
      "name": "_.drop",
      "href": "#drop",
    },
    {
      "key": "0:7",
      "name": "_.dropRight",
      "href": "#dropRight",
    },
    {
      "key": "0:8",
      "name": "_.dropRightWhile",
      "href": "#dropRightWhile",
    },
    {
      "key": "0:9",
      "name": "_.dropWhile",
      "href": "#dropWhile",
    },
    {
      "key": "0:10",
      "name": "_.fill",
      "href": "#fill",
    },
    {
      "key": "0:11",
      "name": "_.findIndex",
      "href": "#findIndex",
    },
    {
      "key": "0:12",
      "name": "_.findLastIndex",
      "href": "#findLastIndex",
    },
    {
      "key": "0:13",
      "name": "_.first -> head",
      "href": "#head",
    },
    {
      "key": "0:14",
      "name": "_.flatten",
      "href": "#flatten",
    },
    {
      "key": "0:15",
      "name": "_.flattenDeep",
      "href": "#flattenDeep",
    },
    {
      "key": "0:16",
      "name": "_.flattenDepth",
      "href": "#flattenDepth",
    },
    {
      "key": "0:17",
      "name": "_.fromPairs",
      "href": "#fromPairs",
    },
    {
      "key": "0:18",
      "name": "_.head",
      "href": "#head",
    },
    {
      "key": "0:19",
      "name": "_.indexOf",
      "href": "#indexOf",
    },
    {
      "key": "0:20",
      "name": "_.initial",
      "href": "#initial",
    },
    {
      "key": "0:21",
      "name": "_.intersection",
      "href": "#intersection",
    },
    {
      "key": "0:22",
      "name": "_.intersectionBy",
      "href": "#intersectionBy",
    },
    {
      "key": "0:23",
      "name": "_.intersectionWith",
      "href": "#intersectionWith",
    },
    {
      "key": "0:24",
      "name": "_.join",
      "href": "#join",
    },
    {
      "key": "0:25",
      "name": "_.last",
      "href": "#last",
    },
    {
      "key": "0:26",
      "name": "_.lastIndexOf",
      "href": "#lastIndexOf",
    },
    {
      "key": "0:27",
      "name": "_.nth",
      "href": "#nth",
    },
    {
      "key": "0:28",
      "name": "_.pull",
      "href": "#pull",
    },
    {
      "key": "0:29",
      "name": "_.pullAll",
      "href": "#pullAll",
    },
    {
      "key": "0:30",
      "name": "_.pullAllBy",
      "href": "#pullAllBy",
    },
    {
      "key": "0:31",
      "name": "_.pullAllWith",
      "href": "#pullAllWith",
    },
    {
      "key": "0:32",
      "name": "_.pullAt",
      "href": "#pullAt",
    },
    {
      "key": "0:33",
      "name": "_.remove",
      "href": "#remove",
    },
    {
      "key": "0:34",
      "name": "_.reverse",
      "href": "#reverse",
    },
    {
      "key": "0:35",
      "name": "_.slice",
      "href": "#slice",
    },
    {
      "key": "0:36",
      "name": "_.sortedIndex",
      "href": "#sortedIndex",
    },
    {
      "key": "0:37",
      "name": "_.sortedIndexBy",
      "href": "#sortedIndexBy",
    },
    {
      "key": "0:38",
      "name": "_.sortedIndexOf",
      "href": "#sortedIndexOf",
    },
    {
      "key": "0:39",
      "name": "_.sortedLastIndex",
      "href": "#sortedLastIndex",
    },
    {
      "key": "0:40",
      "name": "_.sortedLastIndexBy",
      "href": "#sortedLastIndexBy",
    },
    {
      "key": "0:41",
      "name": "_.sortedLastIndexOf",
      "href": "#sortedLastIndexOf",
    },
    {
      "key": "0:42",
      "name": "_.sortedUniq",
      "href": "#sortedUniq",
    },
    {
      "key": "0:43",
      "name": "_.sortedUniqBy",
      "href": "#sortedUniqBy",
    },
    {
      "key": "0:44",
      "name": "_.tail",
      "href": "#tail",
    },
    {
      "key": "0:45",
      "name": "_.take",
      "href": "#take",
    },
    {
      "key": "0:46",
      "name": "_.takeRight",
      "href": "#takeRight",
    },
    {
      "key": "0:47",
      "name": "_.takeRightWhile",
      "href": "#takeRightWhile",
    },
    {
      "key": "0:48",
      "name": "_.takeWhile",
      "href": "#takeWhile",
    },
    {
      "key": "0:49",
      "name": "_.union",
      "href": "#union",
    },
    {
      "key": "0:50",
      "name": "_.unionBy",
      "href": "#unionBy",
    },
    {
      "key": "0:51",
      "name": "_.unionWith",
      "href": "#unionWith",
    },
    {
      "key": "0:52",
      "name": "_.uniq",
      "href": "#uniq",
    },
    {
      "key": "0:53",
      "name": "_.uniqBy",
      "href": "#uniqBy",
    },
    {
      "key": "0:54",
      "name": "_.uniqWith",
      "href": "#uniqWith",
    },
    {
      "key": "0:55",
      "name": "_.unzip",
      "href": "#unzip",
    },
    {
      "key": "0:56",
      "name": "_.unzipWith",
      "href": "#unzipWith",
    },
    {
      "key": "0:57",
      "name": "_.without",
      "href": "#without",
    },
    {
      "key": "0:58",
      "name": "_.xor",
      "href": "#xor",
    },
    {
      "key": "0:59",
      "name": "_.xorBy",
      "href": "#xorBy",
    },
    {
      "key": "0:60",
      "name": "_.xorWith",
      "href": "#xorWith",
    },
    {
      "key": "0:61",
      "name": "_.zip",
      "href": "#zip",
    },
    {
      "key": "0:62",
      "name": "_.zipObject",
      "href": "#zipObject",
    },
    {
      "key": "0:63",
      "name": "_.zipObjectDeep",
      "href": "#zipObjectDeep",
    },
    {
      "key": "0:64",
      "name": "_.zipWith",
      "href": "#zipWith",
    }
  ]
},

];