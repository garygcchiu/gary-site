const ImageSection = (image) => {
    return <section
        className={'section__image'}
        style={{backgroundImage: `url(${image.image})`, height: '20vh'}}
    >
        <div className={'section__image__overlay'}/>
    </section>
};

export default ImageSection;