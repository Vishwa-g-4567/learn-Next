export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="fixed inset-x-0 bottom-0 flex flex-col items-center bg-neutral-900 text-center text-white">
      <div className="w-full p-4 text-center">&copy; {year} Vishwa</div>
    </footer>
  );
}
