import React from "react";
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

const Note = (props) => {

    const deleteNote = () => {
        props.deletItem(props.id);
    }

    return (
        <>
            <div className="Note_div">
                <h2 className="Note_Tittle">{props.Tittle}</h2>
                <p className="Note_Content">{props.Content}</p>
                <br />
                <button onClick={deleteNote} className="Delete_Note"> <DeleteOutlineRoundedIcon/></button>
            </div>
        </>
    )
}

export default Note;