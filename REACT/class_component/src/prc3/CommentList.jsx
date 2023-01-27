import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이진규",
        comment : "나의 첫 댓글",
    },
    {
        name: "이진규",
        comment : "나의 두번째 댓글",
    },
    {
        name: "이진규",
        comment : "나의 세번째 댓글",
    },
];

// function CommentList(props){
//     return(
//         <div>
//             <Comment name="이진규" comment="나의 첫 댓글" />
//             <Comment name="이진규" comment="나의 두번째 댓글" />
//         </div>
//     );
// }

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            }

            )}
        </div>
    );
}

export default CommentList;