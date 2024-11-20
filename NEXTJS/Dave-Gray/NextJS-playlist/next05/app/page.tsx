
import Form from 'next/form'

export default function Home() {
  return (
    <main className='m-4'>
      <h1 className="text-white text-2xl p-4 text-center">Home Page</h1>
      <Form action='/react'>
        <button className='p-4 bg-slate-100 rounded-xl hover:bg-slate-300'>Go To Search</button>
      </Form>
    </main>
  );
}
