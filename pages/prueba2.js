import Link from "next/link";
export default () => {
  const link = `/prueba/12312/asdasd`;
  return (
    <>
      <Link href="/prueba/[id]/[title]" as={`/prueba/asdasdasds/Holaaaa`}>
        {/* <Link href="/"> */}
        <a>HOLA</a>
      </Link>
    </>
  );
};
