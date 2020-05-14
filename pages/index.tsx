import React, { useEffect } from 'react';
import Layout from '../components/templates/Layout';
import PostsList from '../components/PostsList';
import { reduxHOC } from '../HOC/reduxHOC';
import { getPostsOperation } from '../store/posts/operations';
import { useDispatch } from 'react-redux';

const IndexPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsOperation());
    }, []);

    return (
        <Layout>
            <PostsList />
        </Layout>
    );
};

IndexPage.getInitialProps = (props: any) => {
    const { dispatch } = props.reduxStore;
    dispatch(getPostsOperation());
    return {};
};

export default reduxHOC(IndexPage);
