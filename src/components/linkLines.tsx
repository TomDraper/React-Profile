export type LinkListProp = {
    link: string,
    linkText: string,
    text: string
}

export function LinkList({props}:{props?:LinkListProp[]}){
    if (props == null || props.length == 0)
        return;

    var links = props.map((prop, index)=>
        <LinkListItem key={index} prop={prop} />
    )

    return (
        <p>
            {links}
        </p>
    );
}

export function LinkListItem({prop}:{prop:LinkListProp}){
    return (
        <div><a href={prop.link}>{prop.linkText}</a> - {prop.text}<br /></div>
    );
}