export default function LeadList({ leads }) {
  if (!leads || leads.length === 0)
    return (
      <p className="text-center text-gray-500 italic py-6">
        No leads yet. Start by adding one above!
      </p>
    );

  return (
    <ul className="space-y-6">
      {leads.map((lead) => (
        <li
          key={lead._id}
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-indigo-700">
                {" "}
                {lead.name}
              </h3>
              <p className="text-gray-600"> E-mail: {lead.email}</p>
              <p className="text-sm text-indigo-500 font-medium mt-1">
                Status: <em>{lead.status}</em>
              </p>
            </div>
            <div className="mt-4 sm:mt-0 text-sm text-gray-500 text-right">
              Date: {new Date(lead.createdAt).toLocaleString()}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
