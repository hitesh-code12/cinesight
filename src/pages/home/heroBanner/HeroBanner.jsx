import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");
    const [search, setSearch] = useState([]);

    let title=[];
    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
        data?.results.forEach(element => {
            title.push(element.title)
        });
        console.log(title,"title")
            const filterSearch=title.filter((it)=>{
                if(it.includes(query)){
                    return it;
                }
            });
    
            setSearch(filterSearch);

    }, [data,query]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };
    // const handleSearch=()=>{
      
    // }
    console.log(search,"ssssssssssssssssssssssearch")
    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                            value={query}
                            onFocus={true}
                        />
                        <button>Search</button>
                    </div>
                    {query && <div className="recommendation">
                        <ul>
                            {search.map((it)=>{
                                return (
                                <li onClick={()=>setQuery(it)}>
                                    {it} 
                                 </li>
                                )
                            }) 
                           }
                        </ul>

                    </div>}
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
