import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { ApiContext } from '../../Provider/ApiProvider';
import { useNavigate } from 'react-router-dom';

const CreatePostModal = () => {
const {user} = useContext(AuthContext);
const {createPost} = useContext(ApiContext)
const navigate = useNavigate()
    const handlePost = (e) => {
        e.preventDefault()
        const form = e.target;
        const userId = user.uid;
        const caption = form.caption.value;
        const photoUrl = form.photourl.value;
        const postedBy = user?.displayName;
        const userPhoto = user?.photoURL;
        const likes = []
        const postData = {userId,caption,photoUrl,postedBy,userPhoto,likes}
        createPost(postData)
        navigate('/')
    } 
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <form  onSubmit={handlePost} className="modal-box relative p-12 z-50">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle  absolute right-2 top-2">✕</label>
                    <div className=" w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Caption</span>
                                </label>
                                <input type="text" required placeholder="caption" name='caption' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered" required name='photourl'/>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                                <button type='submit'  className="btn btn-primary">post</button>
                            </div>
                    </div>
                </form>
            </div>

        </>
    );
};

export default CreatePostModal;