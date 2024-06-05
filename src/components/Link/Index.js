import { LinkBox, TextLink, TouchablePart } from "./Styled"

export const Link = ({
    navigation,
    route,
    text,
    color
}) => {

    return (
        <LinkBox>
            <TouchablePart onPress={() => navigation.replace(route)}>
                <TextLink
                    style={{
                        color: color
                    }}
                >{text}</TextLink>
            </TouchablePart>
        </LinkBox>
    )
}