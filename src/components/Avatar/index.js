/** @jsxImportSource @emotion/react */

const Index = ({ img }) => {
  const style = {
    display: 'inline-block',
    width: '2.4rem',
    height: '2.4rem',
    objectFit: 'cover',
    borderRadius: '50%',
    cursor: 'pointer',
  }

  return <img css={style} src={img} />
}

export default Index
