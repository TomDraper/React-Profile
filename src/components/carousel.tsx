import { LinkListProp, LinkList } from './linkLines.tsx'
import { TagBox, BasicParagraphSection } from './textHelpers.tsx'
import { BannerProp, Banner } from './banner.tsx';

import '../css/carousel.css';

export type CarouselItemProp = {
    image: string,
    title: string,
    banner?: BannerProp,
    paragraphs: string[],
    linkListProps?: LinkListProp[],
    tags: string[]
}

export function Carousel({anchorName, props}:{anchorName:string, props:CarouselItemProp[]}){
    var sectionClassNames = `largeBoxCarousel ${anchorName} fadeWhenInView`
    
    return (
        <div className={sectionClassNames}>
            <CarouselItems props={props} />
        </div>
    );
}

function CarouselItems({props}:{props:CarouselItemProp[]}){
    return props.map((prop, index)=>
        <CarouselItem key={index} prop={prop} />
    );
}

function CarouselItem({prop}:{prop:CarouselItemProp}){
    return (
        <div className="largeBoxScroll">
            <div className="largeBoxScrollImageColumn">
                <img src={prop.image}/>
            </div>
            <div className="largeBoxScrollContentColumn">
                <h3>{prop.title}</h3>
                <div className="largeBoxScrollContent">
                    <Banner prop={prop.banner} />
                    <BasicParagraphSection paragraphs={prop.paragraphs} />
                    <LinkList props={prop.linkListProps} />
                </div>
                <TagBox prop={prop.tags} />
            </div>
        </div>
    );
}