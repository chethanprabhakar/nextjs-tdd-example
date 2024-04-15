
import React, { useState } from "react";
import yaml from "js-yaml";

interface QuestionnaireFormProps {
  onSubmit: (data: string) => void;
}

const QuestionnaireForm: React.FC<QuestionnaireFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    // Initial state for form data
    tier1_availability_zone: "",
    tier1_service_name: "",
    tier1_icon_url: "",
    tier2_availability_zone: "",
    tier2_service_name: "",
    tier2_icon_url: "",
    tier3_availability_zone: "",
    tier3_service_name: "",
    tier3_icon_url: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataYAML = yaml.dump(formData); // Convert form data to YAML format
    console.log(dataYAML); // Print YAML data to console
    onSubmit(dataYAML); // Pass YAML data to the parent component
    setFormData({
      // Reset form data after submission
      tier1_availability_zone: "",
      tier1_service_name: "",
      tier1_icon_url: "",
      tier2_availability_zone: "",
      tier2_service_name: "",
      tier2_icon_url: "",
      tier3_availability_zone: "",
      tier3_service_name: "",
      tier3_icon_url: ""
    });
  };

  return (
    <div className="questionnaire-form">
      <h2 className="form-title">Questionnaire</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>1st Tier Architecture</h3>
          <label className="form-label">Availability Zone:</label>
          <input
            type="text"
            name="tier1_availability_zone"
            value={formData.tier1_availability_zone}
            onChange={handleInputChange}
            className="form-input"
          />
          <label className="form-label">Service Name:</label>
          <input
            type="text"
            name="tier1_service_name"
            value={formData.tier1_service_name}
            onChange={handleInputChange}
            className="form-input"
          />
          <label className="form-label">Icon URL:</label>
          <input
            type="text"
            name="tier1_icon_url"
            value={formData.tier1_icon_url}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <h3>2nd Tier Architecture</h3>
          <label className="form-label">Availability Zone:</label>
          <input
            type="text"
            name="tier2_availability_zone"
            value={formData.tier2_availability_zone}
            onChange={handleInputChange}
            className="form-input"
          />
          <label className="form-label">Service Name:</label>
          <input
            type="text"
            name="tier2_service_name"
            value={formData.tier2_service_name}
            onChange={handleInputChange}
            className="form-input"
          />
          <label className="form-label">Icon URL:</label>
          <input
            type="text"
            name="tier2_icon_url"
            value={formData.tier2_icon_url}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <h3>3rd Tier Architecture</h3>
          <label className="form-label">Availability Zone:</label>
          <input
            type="text"
            name="tier3_availability_zone"
            value={formData.tier3_availability_zone}
            onChange={handleInputChange}
            className="form-input"
          />
          <label className="form-label">Service Name:</label>
          <input
            type="text"
            name="tier3_service_name"
            value={formData.tier3_service_name}
            onChange={handleInputChange}
            className="form-input"
          />
          <label className="form-label">Icon URL:</label>
          <input
            type="text"
            name="tier3_icon_url"
            value={formData.tier3_icon_url}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <style jsx>{`
        .questionnaire-form {
            max-width: 400px;
            margin: 0 auto;
          }
          
          .form-title {
            text-align: center;
            margin-bottom: 20px;
          }
          
          .form {
            display: flex;
            flex-direction: column;
          }
          
          .form-group {
            margin-bottom: 15px;
          }
          
          .form-label {
            font-weight: bold;
          }
          
          .form-input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            color: #333; /* Update text color to dark */
          }
          
          .submit-btn {
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          
          .submit-btn:hover {
            background-color: #0056b3;
          }
      `}</style>
    </div>
  );
};

export default QuestionnaireForm;
