import Item from "./Item";
import Left from '../../assets/left.png'
import Right from '../../assets/right.png'
import { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";
import axios from "axios";
import * as s from './style'

export default function Listar() {
    const [characters, setCharacters] = useState([]);
    const [pages, setPages] = useState(1);
    const [count, setCount] = useState(0);
    const [final, setFinal] = useState(1);
    const [refresh, setRefresh] = useState(false);

    const getCategories = async (page) => {
        try {
            const response = await axios.get(`${BASE_URL}/character/?page=${page}`);
            setCharacters(response.data.results);
            setFinal(Number(response.data.info.pages));
        } catch (error) {
            console.error(error);
        }
    };

    const limitPass = () => {
        getCategories(pages)
        if (count < characters.length - 1) {
            setCount(() => count + 1);

        } else if (pages != final) {
            getCategories(pages + 1)
            setCount(0)
            setPages(pages + 1)

        } else {
            setCount(0)
            setPages(1)
            getCategories(1)
            
        }

    };

    const limitBack = () => {
        if (count > 0) {
            setCount(() => count - 1);
        }else if(pages === 1){
            getCategories(final)
            setPages(final)
            setCount(5)
            
        }else if(pages != final){
            getCategories(pages - 1)
            setPages(pages - 1)
            setCount(characters.length - 1)
        }else{    
            const b = async () => {
               await getCategories(final - 1) 
               setCount(19)
            }
            b()
            setPages(final - 1)
            
            
        } 

    };

    console.log('id:', count)
    console.log('pagina:', pages)

    useEffect(() => {
        getCategories(pages);
    }, [refresh]);


    return (
        <s.StyledDivPrimary>
            <s.StyledDiv>
                <s.StyledButton onClick={limitBack}>
                    <s.StyledImg src={Left} />
                </s.StyledButton>


                {characters.length > 0 && <Item category={characters[count]} />}

                <s.StyledButton onClick={limitPass}>
                    <s.StyledImg src={Right} />
                </s.StyledButton>
            </s.StyledDiv>
        </s.StyledDivPrimary>
    );
}
