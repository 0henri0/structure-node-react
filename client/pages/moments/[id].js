import Layout from '../../components/layouts/layout';
import BlogArea from '../../components/commons/blogArea';
import MomentDetailComponent from '../../components/moments/momentDetailComponent';
import { useRouter } from 'next/router';

const MomentDetail = () => {
    const router = useRouter()
    const { id } = router.query
    console.log(router);
    return (
        <Layout title='this is MomentDetail'>
            <BlogArea p='p_100'>
            <p>Post: {id}</p>
            <div className="row  d-flex justify-content-center">
                <div className="col-lg-9 col-md-12">
                    <MomentDetailComponent />
                </div>
            </div>
            </BlogArea>
        </Layout>
    );
};

export default MomentDetail;