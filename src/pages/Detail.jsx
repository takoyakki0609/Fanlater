import { FanlaterContext } from "context/FanlaterContext";
import React, { useContext, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

const FanlaterBox = styled.section`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  padding: 30px 0;
  width: 700px;
  min-height: 500px;
`;

const Detail = () => {
  const [edit, setEdit] = useState(false); // 수정에 관한 state
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  console.log(location.state);

  const dataList = useContext(FanlaterContext);
  console.log(dataList);

   const foundData = dataList.data.find((item) => {
    return item.id === params.id;
  }); 
  const [editContent, setEditContent] = useState(foundData.content);

  const onClickDelete = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const deletedData = dataList.data.filter((item) => {
        console.log(item)
        console.log(id)
        return item.id !== id;
      });
      
      dataList.setData(deletedData);
      navigate("/");
      
    } else {
      return false;
    }   
  };
  
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <button
        style={{ marginTop: "40px", marginBottom: "20px" }}
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로{" "}
      </button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FanlaterBox>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <figure>
              <img
                src={foundData.avatar}
                alt="유저아바타"
                style={{ width: "100px", borderRadius: "50%" }}
              />
            </figure>

            <h2 style={{ fontSize: "38px" }}>{foundData.nickname}</h2>
            <p>{foundData.createdAt}</p>
          </div>
          <p style={{ margin: "20px 10px" }}>To. {foundData.writedTo}</p>
          <div style={{ margin: "0 auto" }}>
            {edit === true ? (
              <textarea
                style={{ width: "600px", height: "300px", fontSize: "20px" }}
                value={editContent}
                onChange={(e) => {
                  setEditContent(e.target.value);
                }}
              ></textarea>
            ) : (
              <p>{editContent}</p>
            )}
          </div>

          {edit ? (
            <div>
              <button
                onClick={() => {
                  setEdit(false);
                }}
              >
                수정완료
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  setEdit(true);
                }}
              >
                수정
              </button>
              <button onClick={() => onClickDelete(foundData.id)}>삭제</button>
            </div>
          )}
        </FanlaterBox>
      </div>
    </div>
  );
};

export default Detail;
