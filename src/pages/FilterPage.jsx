import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/reset.css";
import "../styles/FilterPage.css";
import FilterCard from "../components/FilterCard";

const FilterPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname, content } = location.state || {}; // 이전 페이지에서 받은 데이터

    const [loading, setLoading] = useState(false);

    // make ticket에 넘겨주는 데이터
    const handleFilterClick = (filter) => {
        navigate("/make", {
            state: {
                nickname,
                content,
                filter,
            },
        });
    };

    return (
        <div className="all-container">
            <div className="back-icon">
                <img src="./images/filter-page-back-icon.svg" />
                <img src="./images/filter-page-back-icon.svg" />
            </div>
            <div className="filter-container">
                <div className="title-container">
                    <h2 className="filter-title">필터를 선택해 볼까요?</h2>
                    <p className="filter-subtitle">설명을 읽고 어떤 필터를 사용할지 고민해 보세요!</p>
                </div>
                {/* MYBABY 조지아 조지아 조지아 Can't take my eyes off you my hometown is only you */}

                <div className="filter-list">
                    <FilterCard
                        name="감성 필터"
                        bgimage="./images/filter-card-감성.png"
                        image="./images/필터-감성.svg"
                        description={
                            <>감성 필터는 여러분의 이야기를 깊게 공감하여 위안, <br />감동을 줄 수 있는 필터에요.</>
                        }
                        example="ex) 오늘 너무 우울해 → 내일은 좀 더 너에게 희망적인 날이 되기를"
                        onClick={() => handleFilterClick("감성")}
                        className="filter-gamsung"
                    />
                    <FilterCard
                        name="가오 필터"
                        bgimage="./images/filter-card-가오.png"
                        image="./images/필터-가오.svg"
                        description={
                            <>가오 필터는 여러분의 이야기를 멋있고 든든한 말투로 위안 또는 <br />이야기 해주는 필터에요.</>
                        }
                        example={
                            <>ex) 선우가 너무 보고싶은데 볼 수 없어 → 선우? 선우따위 필요없어. <br />잘생긴 사람 보고싶으면 거울 봐</>
                        }
                        onClick={() => handleFilterClick("가오")}
                        className="filter-gao"
                    />
                    <FilterCard
                        name="개그 필터"
                        bgimage="./images/filter-card-개그.png"
                        image="./images/필터-개그.svg"
                        description="개그 필터는 여러분의 이야기를 즐거움과 웃음으로 바꿔주는 필터에요."
                        example="ex) 배고파..집 가고싶어. → 앞에 있는 노트북 부앙부앙 씹어먹자"
                        onClick={() => handleFilterClick("재미")}
                        className="filter-fun"
                    />
                </div>
            </div>

        </div>

    );
};

export default FilterPage;