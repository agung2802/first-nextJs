/* eslint-disable react/jsx-key */
type DetailGenderParams = { params: { slug: string[] } };

export default function GenderPages(props: DetailGenderParams) {
  const { params } = props;

  return (
    <div>
      <h1>{params.slug ? "Detail Gender Pages" : "Gender Pages"}</h1>
      {params.slug.map((value) => {
        return (
          <ul>
            <li>{value}</li>
          </ul>
        );
      })}
    </div>
  );
}
