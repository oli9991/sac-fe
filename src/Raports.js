import axios from 'axios';
import React, { createRef, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import jspdf from 'jspdf';
import ApexCharts from 'apexcharts';

const toolbar = {
  show: true,
  offsetX: 0,
  offsetY: 0,
  tools: {
    download: true,
    selection: false,
    zoom: false,
    zoomin: false,
    zoomout: false,
    pan: false,
    reset: false | '<img src="/static/icons/reset.png" width="20">',
    customIcons: [],
  },
  export: {
    csv: {
      filename: undefined,
      columnDelimiter: ',',
      headerCategory: 'category',
      headerValue: 'value',
      dateFormatter(timestamp) {
        return new Date(timestamp).toDateString();
      },
    },
    svg: {
      filename: undefined,
    },
    png: {
      filename: undefined,
    },
  },
  autoSelected: 'zoom',
};

const Raports = () => {
  const refChart1 = createRef();
  const refChart2 = createRef();
  const [data, setdata] = useState({
    series: [33, 33, 33],
    options: {
      chart: {
        width: 500,
        type: 'pie',
        toolbar,
        id: 'chart1',
      },
      labels: [
        'Permise auto',
        'Certificate de înmatriculare',
        'Autorizație provizorie',
      ],
      colors: ['#185af9', '#E91E63', '#1a4220'],
      dataLabels: {
        formatter: function (val, opts) {
          return +val.toFixed(2);
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  const [chart2, setchart2] = useState({
    series: [
      {
        name: 'Persoana fizica',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Persoana juridica',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 700,
        type: 'area',
        toolbar,
        id: 'chart2',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });
  useEffect(() => {
    axios
      .get('http://localhost:3003/api/admin/getAll', {})
      .then(({ data }) => {
        let permis = [];
        let certificat = [];
        let autorizatie = [];
        let timestamps = [];
        let fizica = [];
        data.forEach((element) => {
          if (element.taxe === 'permis') {
            permis.push(element);
          }
          if (element.taxe === 'certificat') {
            certificat.push(element);
          }
          if (element.taxe === 'autorizatie') {
            autorizatie.push(element);
          }
          var dt = new Date(element.timestamp);
          dt.setHours(dt.getHours() + 2);
          timestamps.push(dt.toISOString());
          fizica.push(element.suma);
        });

        setdata((data) => ({
          ...data,
          series: [permis.length, certificat.length, autorizatie.length],
        }));

        setchart2((data) => ({
          ...data,
          series: [
            {
              name: 'Suma plătita',
              data: fizica,
            },
          ],
          options: {
            ...data.options,
            xaxis: {
              ...data.xaxis,
              categories: timestamps,
            },
          },
        }));
      })
      .catch(() => {
        console.log('error');
      });
  }, []);

  const save = () => {
    const pdf = new jspdf('p', 'pt', [500, 500]);

    ApexCharts.exec('chart1', 'dataURI').then(async ({ imgURI }) => {
      pdf.addImage(imgURI, 'PNG', 50, 25);
      await ApexCharts.exec('chart2', 'dataURI').then(({ imgURI }) => {
        pdf.addImage(imgURI, 'PNG', 50, 225);
      });
      pdf.save(
        `Raport generat pe ${new Date().toISOString().slice(0, 10)}.pdf`
      );
    });
  };

  return (
    <div className='font-poppins flex justify-start items-center w-screen h-screen flex-col'>
      <Link className='z-20 mt-10' to='/'>
        Înapoi la formular
      </Link>
      <div
        className='font-poppins flex justify-center items-center w-screen h-auto flex-col'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className='mr-10 flex justify-center items-center flex-col'>
          <h1 className='text-3xl w-full mb-8 text-center mt-10'>
            Raport privind diversitatea tipurilor de taxe înregistrate
          </h1>
          <Chart
            id='chart1'
            options={data.options}
            series={data.series}
            type='pie'
            width='500'
            className='z-20'
            ref={refChart1}
          />
        </div>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-3xl w-full mb-8 text-center mt-10'>
            Raport privind densitatea plătirii taxelor
          </h1>
          <Chart
            id='chart2'
            options={chart2.options}
            series={chart2.series}
            type='area'
            width='500'
            className='z-20'
            ref={refChart2}
          />
        </div>
      </div>
      <button
        className='btn btn-secondary w-auto mt-10 mb-5 z-20'
        onClick={save}
      >
        Descarcă rapoartele
      </button>
      <div className='z-0 pattern absolute w-full min-h-screen hidden md:flex opacity-25' />
    </div>
  );
};
export default Raports;
