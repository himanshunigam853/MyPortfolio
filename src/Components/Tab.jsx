import React, { useState } from "react";
import "./Tab.css";

const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleclick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <center>
        <h1 className="heading">Uses of Tab functonality</h1>
        <div className="bt">
          <button onClick={() => handleclick("tab1")} class="btn-but">
            Home
          </button>
          <button onClick={() => handleclick("tab2")} class="btn-but">
            About
          </button>
          <button onClick={() => handleclick("tab3")} class="btn-but">
            Portfolio
          </button>
          <button onClick={() => handleclick("tab4")} class="btn-but">
            Contact
          </button>
        </div>
        <div className="result">
          {activeTab == "tab1" && (
            <div>
              <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="mx-auto flex max-w-xs flex-col gap-y-4"
                      >
                        <dt className="text-base leading-7 text-gray-600">
                          {stat.name}
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          )}
          {activeTab == "tab2" && (
            <div>
              <h1>About</h1>
            </div>
          )}
          {activeTab == "tab3" && (
            <div>
              <h1>Portfolio</h1>
            </div>
          )}
          {activeTab == "tab4" && (
            <div>
              <h1>Contact</h1>
            </div>
          )}
        </div>
      </center>
    </div>
  );
};

export default Tab;
