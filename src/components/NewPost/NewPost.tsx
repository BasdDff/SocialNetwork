import React, {useState} from 'react';
import imageDefault from '../../assets/img/defaultUser.png'
import styles from './NewPost.module.scss'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {useActions} from "../../hooks/useRedux";

const NewPost = () => {

    const [description, setDescription] = useState<string>("")
    const [image, setImage] = useState<any>()

    const onChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }
    const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.files?.[0])
    }

    const profile = true //image avatar user

    const {createPost} = useActions()

    const newPost = () => {
        const postData = new FormData()

        postData.append("description", description)
        postData.append("image", image)

        createPost(postData)

        setDescription('')
        setImage('')
    }

    return (
        <div className={`${styles.wrapper} background-post`}>
            <div className={styles.block}>
                <img src={profile ? imageDefault : imageDefault} className={styles.avatar} alt="avatar"/>
                <input placeholder={'What\'s in your mind ?'} className={styles.input} onChange={onChangeDescription} value={description}/>
            </div>
            {image &&
            <div className={styles.file}>
                <img className={styles.file__img} src={URL.createObjectURL(image)} alt="user-image"/>
                <CancelOutlinedIcon className={styles.file__icon} onClick={() => setImage(undefined)}/>
            </div>
            }
            <div className={styles.form}>
                <div className={styles.form__wrapper}>
                    <label htmlFor='file' className={styles.form__label}>
                        <PermMediaOutlinedIcon className={styles.form__icon}/>
                        <span>Photo</span>
                        <input style={{display: 'none'}} type='file' id='file' accept='.png,.jpeg,.jpg'
                               onChange={onChangeImage}
                        />
                    </label>
                </div>
                <Button text="Share" onClick={() => newPost()}/>
            </div>
        </div>
    );
};

export default NewPost;