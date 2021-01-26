function helloWord(str){
    return 'hello' + str;
};
if(typeof module !== undefined){
    module.exports = helloWord;
}
