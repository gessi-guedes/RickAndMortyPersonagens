import * as style from './styles';

export default function Item({category}){

    return(<>
        <style.StyledDiv>
            <style.StyledImg src={category.image} />
            <style.StyledName>{category.name}</style.StyledName>
            <style.StyledInfo>{category.status},{category.species}</style.StyledInfo>
            <style.StyledInfo>Última vez avistado: <br /> {category.location.name}</style.StyledInfo>
            <style.StyledInfo>Primeira vez avistado: <br /> {category.origin.name} </style.StyledInfo>
        </style.StyledDiv>
    </>)
}