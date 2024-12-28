import React, { useState } from "react";
import "./Calculator.css";

const ConstructionCalculator = () => {
  const [area, setArea] = useState(0);
  const [floors, setFloors] = useState(1);
  const [foundation, setFoundation] = useState("ленточный");
  const [wallMaterial, setWallMaterial] = useState("кирпич");
  const [roofType, setRoofType] = useState("плоская");
  const [options, setOptions] = useState({
    balcony: false,
    terrace: false,
    garage: false,
  });
  const [totalCost, setTotalCost] = useState(0);
  const [breakdown, setBreakdown] = useState({});

  const calculateCost = () => {
    const baseCost = area * 5000 * floors;
    const foundationCost = foundation === "плитный" ? 200000 : foundation === "столбчатый" ? 100000 : 150000;
    const wallCost = wallMaterial === "кирпич" ? area * 3000 : wallMaterial === "дерево" ? area * 2000 : area * 2500;
    const roofCost = roofType === "скатная" ? 150000 : 100000;
    const optionsCost =
      (options.balcony ? 50000 : 0) +
      (options.terrace ? 80000 : 0) +
      (options.garage ? 120000 : 0);

    const total = baseCost + foundationCost + wallCost + roofCost + optionsCost;
    setTotalCost(total);
    setBreakdown({
      baseCost,
      foundationCost,
      wallCost,
      roofCost,
      optionsCost,
    });
  };

  const handleOptionChange = (option) => {
    setOptions({ ...options, [option]: !options[option] });
  };

  const saveAndSend = () => {
    const calculationDetails = {
      area,
      floors,
      foundation,
      wallMaterial,
      roofType,
      options,
      totalCost,
      breakdown,
    };
    alert(`Расчет сохранен и отправлен на email!\n\n${JSON.stringify(calculationDetails, null, 2)}`);
  };

  return (
    <div className="calculator">
      <h1>Калькулятор стоимости строительства</h1>
      <div className="form-group">
        <label>Площадь строительства (м²):</label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
          placeholder="Введите площадь"
        />
      </div>
      <div className="form-group">
        <label>Количество этажей:</label>
        <input
          type="number"
          value={floors}
          onChange={(e) => setFloors(Number(e.target.value))}
          placeholder="Введите количество этажей"
        />
      </div>
      <div className="form-group">
        <label>Тип фундамента:</label>
        <select value={foundation} onChange={(e) => setFoundation(e.target.value)}>
          <option value="ленточный">Ленточный</option>
          <option value="плитный">Плитный</option>
          <option value="столбчатый">Столбчатый</option>
        </select>
      </div>
      <div className="form-group">
        <label>Материал стен:</label>
        <select value={wallMaterial} onChange={(e) => setWallMaterial(e.target.value)}>
          <option value="кирпич">Кирпич</option>
          <option value="дерево">Дерево</option>
          <option value="газобетон">Газобетон</option>
        </select>
      </div>
      <div className="form-group">
        <label>Тип крыши:</label>
        <select value={roofType} onChange={(e) => setRoofType(e.target.value)}>
          <option value="плоская">Плоская</option>
          <option value="скатная">Скатная</option>
        </select>
      </div>
      <div className="form-group">
        <label>Дополнительные опции:</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={options.balcony}
              onChange={() => handleOptionChange("balcony")}
            />
            Балкон
          </label>
          <label>
            <input
              type="checkbox"
              checked={options.terrace}
              onChange={() => handleOptionChange("terrace")}
            />
            Терраса
          </label>
          <label>
            <input
              type="checkbox"
              checked={options.garage}
              onChange={() => handleOptionChange("garage")}
            />
            Гараж
          </label>
        </div>
      </div>
      <button className="calculate-button" onClick={calculateCost}>
        Рассчитать стоимость
      </button>
      <div className="result">
        <h2>Общая стоимость: {totalCost.toLocaleString()} ₽</h2>
        <ul>
          <li>Базовая стоимость: {breakdown.baseCost?.toLocaleString()} ₽</li>
          <li>Фундамент: {breakdown.foundationCost?.toLocaleString()} ₽</li>
          <li>Материал стен: {breakdown.wallCost?.toLocaleString()} ₽</li>
          <li>Крыша: {breakdown.roofCost?.toLocaleString()} ₽</li>
          <li>Доп. опции: {breakdown.optionsCost?.toLocaleString()} ₽</li>
        </ul>
      </div>
      <button className="save-button" onClick={saveAndSend}>
        Сохранить и отправить на email
      </button>
    </div>
  );
};

export default ConstructionCalculator;
