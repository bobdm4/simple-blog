import React from 'react';
import Layout from '../../components/templates/Layout';
import CreatePostForm from '../../components/CreatePostForm';

const NewPostPage: React.FC = () => {
    return (
        <Layout>
            <CreatePostForm />
        </Layout>
    );
};

export default NewPostPage;
