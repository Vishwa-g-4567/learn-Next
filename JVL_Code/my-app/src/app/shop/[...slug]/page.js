export default function Page({ params }) {
  return (
    <div>
      My Post : {params.slug[0]}/{params.slug[1]}/{params.slug[2]}
    </div>
  );
}
