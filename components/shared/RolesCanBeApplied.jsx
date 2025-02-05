"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "../ui/card";

const RolesCanBeApplied = ({roles, roleName}) => {
  
  return (
    <div className="p-12">
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Roles Can A <span className="text-primary">{roleName}</span> Pursue?
          </h2>
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-cols-auto">
            {roles.map((role, index) => (
              <div key={index} className="border-l-4 border-blue-600">
                <CardHeader className="">
                  <h3 className="text-xl font-semibold text-primary">{role.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{role.description}</p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RolesCanBeApplied;
