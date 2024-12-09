import { connect } from 'react-redux';

function Count({ count }) {
  return (
    <>
      <div>Countコンポーネント:{count}</div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(Count);
// export default Count;
