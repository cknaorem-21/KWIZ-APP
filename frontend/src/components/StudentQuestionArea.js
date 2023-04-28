import { useEffect, useState } from "react";
import axios from "axios";

function StudentQuestionArea(props) {


  const [data, setData] = useState([]);
  const url = process.env.REACT_APP_URL;
  

  useEffect(() => {
    axios
      .post(url + "/get-question-by-id", { id: props.id })
      .then(function (res) {
        setData(res.data[0]);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);


  const handleClick = (e)=>{
    props.handleCallBack({q:data._id,op:e.target.value,ans:data.ans});
  }


  return (
    <>
      <div>
        <div class="flex flex-col">
          <div class="flex flex-col justify-center items-center border-x-2 border-t-2 border-gray-500 bg-green-200 rounded-tl-xl rounded-tr-xl mt-3 mr-3 ml-3 p-3">
            <div class="flex justify-center text-lg font-bold leading-loose  bg-gradient-to-r from-green-200 via-indigo-500 to-green-200 min-w-[8rem] max-w-[20rem] w-[60%] px-4">
              <p>Question</p>
              <span className="mx-2">{props.number+1}</span>
            </div>

            <p>{data.question}</p>
          </div>

          {/* options div */}
          <div class="bg-lime-100 border-x-2 border-b-2 border-gray-500 rounded-bl-xl rounded-br-xl mb-3 mr-3 ml-3 p-3">
            {/* radio button */}
            <div class="flex items-center pl-4 border-2 border-gray-700 rounded-lg hover:border-green-700 hover:bg-green-100 mb-3">
              <input
                id="bordered-radio-1"
                type="radio"
                value="1"
                onClick={handleClick}
                name={props.id}
                class="w-7 h-7 text-red-600 bg-gray-100 border-gray-300 accent-red-500"
              />
              <label
                for="bordered-radio-1"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 p-2"
              >
                {data.op_a}
              </label>
            </div>

            <div class="flex items-center pl-4 border-2 border-gray-700 rounded-lg hover:border-green-700 hover:bg-green-100 mb-3">
              <input
                id="bordered-radio-2"
                type="radio"
                value="2"
                
                onClick={handleClick}
                name={props.id}
                class="w-7 h-7 text-red-600 bg-gray-100 border-gray-300 accent-red-500"
              />
              <label
                for="bordered-radio-2"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 p-2"
              >
                {data.op_b}
              </label>
            </div>

            <div class="flex items-center pl-4 border-2 border-gray-700 rounded-lg hover:border-green-700 hover:bg-green-100 mb-3">
              <input
                id="bordered-radio-3"
                type="radio"
                value="3"
                name={props.id}
                
                onClick={handleClick}
                class="w-7 h-7 text-red-600 bg-gray-100 border-gray-300 accent-red-500"
              />
              <label
                for="bordered-radio-3"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 p-2"
              >
                {data.op_c}
              </label>
            </div>

            <div class="flex items-center pl-4 border-2 border-gray-700 rounded-lg hover:border-green-700 hover:bg-green-100 mb-3">
              <input
                id="bordered-radio-4"
                type="radio"
                value="4"
                name={props.id}
                onClick={handleClick}
                class="w-7 h-7 text-red-600 bg-gray-100 border-gray-300 accent-red-500"
              />
              <label
                for="bordered-radio-4"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900 p-2"
              >
                {data.op_d}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentQuestionArea;
