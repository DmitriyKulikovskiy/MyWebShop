import React, { useState } from 'react'
import './gadget.css'
import { clientFeedback, nameImg, like, dislike, rating } from '../../../../assets/icons'
import SetDate from '../../../../assets/date';

const ClientFeedback = ({comments,text,postComment,onCommentChange,putLike}) => {

    const [open, setOpen] = useState(false);
    const showFeedback = () => {
        setOpen(!open)
    }

    return (
        <div className='container-feedback'>
            {clientFeedback}<span onClick={showFeedback}>Client Feedback</span>

            <div className={open === false ? 'closeOpen' : 'showOpen'}>
                <hr />
            <div className='text-but-container'>
                <textarea value={text} onChange={e => onCommentChange(e.target.value) } />
                <button onClick={postComment} className='add'>Add</button>
            </div>   
                <div className='comments-container'>
                    {comments.map(m => 
                    <div key={m.id} className='comment-container'>
                        <div className='name'>
                            {nameImg}John
                            <span className='product-rating'>{rating}{rating}{rating}</span>
                            <SetDate />
                        </div>
                        <div className='text-comment'>
                            <span onClick={() => putLike(m.id)} className='like'>{like}{m.like}</span>
                            <div className='text'>{m.text}</div>
                        </div>
                    </div>)} 
                </div>
            </div>
        </div>
    )
}

export default ClientFeedback
