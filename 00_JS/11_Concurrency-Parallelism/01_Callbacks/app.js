const getApple = (mycallback) => {
    setTimeout(() => {
        mycallback({ name: 'Macintosh' });
    }, 2000);
};

getApple((apple) => {
    console.log(apple.name);
})
