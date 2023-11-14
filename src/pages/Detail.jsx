import React from "react";
import { useNavigate, useParams,useLocation } from "react-router-dom";


const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const params = useParams();
  console.log(params)
  console.log(location);

  const foundData = location.state.find((item) => {
    return item.id == params.id;
  });

  console.log(foundData);
  return (
    <div>
      <button onClick={()=>{
        navigate("/")
      }}>홈으로 </button>
    <section>
        <div>
          <figure>
            <img src={foundData.avatar} alt="유저아바타" />
          </figure>
          <div>
            <h2>{foundData.nickname}</h2>
            <p>{foundData.createdAt}</p>
          </div>
          <p>To. {foundData.writedTo}</p>
          <div>
            <p>{foundData.content}</p>
          </div>
        </div>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </section>
    </div>
  );
};

export default Detail;
