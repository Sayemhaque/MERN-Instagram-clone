import React from 'react';

const CreatePostModal = () => {
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative p-12 z-50">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle  absolute right-2 top-2">✕</label>
                    <div className=" w-full max-w-lg shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Caption</span>
                                </label>
                                <input type="text" placeholder="caption" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CreatePostModal;