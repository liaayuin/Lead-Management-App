import useSWR from "swr";
import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";
import "tailwindcss";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";
  const { data: leads, mutate, error } = useSWR(`${apiBase}/leads`, fetcher);

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 px-4 py-12 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="text-center">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight drop-shadow-md">
            Lead Management
          </h1>
          <p className="mt-4  text-lg sm:text-xl text-blue-500">
            Add, organize, and track your leads with ease
          </p>
        </header>

        <section className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 sm:p-10 transition hover:shadow-indigo-300">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
            Add New Lead
          </h2>
          <LeadForm apiBase={apiBase} onCreate={() => mutate()} />
        </section>

        <section className="bg-white/90 rounded-3xl shadow-xl p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Your Leads
          </h2>
          {error && (
            <p className="text-red-700 bg-red-100 border border-red-300 p-4 rounded-xl text-center">
              Failed to load leads. Please try again.
            </p>
          )}
          {!leads ? (
            <div className="flex items-center justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-500"></div>
            </div>
          ) : (
            <LeadList leads={leads} />
          )}
        </section>
      </div>
    </main>
  );
}
