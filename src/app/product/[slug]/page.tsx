type DetailProductParams = { params: { slug: string } };

export default function ProductPages(props: DetailProductParams) {
  const { params } = props;

  return (
    <div>
      <h1>Detail Product Pages</h1>
      <p>{params.slug}</p>
    </div>
  );
}
