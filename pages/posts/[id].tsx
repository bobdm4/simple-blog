import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getCurrentPostOperation } from '../../store/posts/operations';
import { reduxHOC } from '../../HOC/reduxHOC';
import PostDetail from '../../components/PostDetail';
import { clearCurrentPost } from '../../store/posts/actions';
import Layout from '../../components/templates/Layout';
import AddCom from '../../components/AddCom';

const PostDetailPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        dispatch(getCurrentPostOperation(router.query.id));

        return () => {
            dispatch(clearCurrentPost());
        };
    }, []);

    return (
        <Layout>
            <PostDetail />
            <AddCom />
        </Layout>
    );
};

PostDetailPage.getInitialProps = (props: any) => {
    const { dispatch } = props.reduxStore;
    dispatch(getCurrentPostOperation(props.query.id));
    return {};
};

export default reduxHOC(PostDetailPage);
