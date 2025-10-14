(function dsbuilder(attr) {
    var fetchSize = '1001'; //attr["v-fetchsize"] || "0";
    var urlBuilder = "jdbc:postgresql://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "/" + attr[connectionHelper.attributeDatabase] + "?defaultRowFetchSize=" + fetchSize;
    return [urlBuilder];
})
