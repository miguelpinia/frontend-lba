import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = () => {
  var mock = new MockAdapter(axios, { delayResponse: 10 });
  mock.onPost('/spanningTree').reply(200, {
    ejecucion: {
      algorithms: [
        'CHASELEV',
        'IDEMPOTENT_LIFO',
        'IDEMPOTENT_FIFO',
        'WS_NC_MULT_LA',
        'B_WS_NC_MULT_LA',
        'NEW_B_WS_NC_MULT_LA'
      ],
      directed: true,
      graphType: 'TORUS_3D_40',
      executions: {
        'thread-7': {
          IDEMPOTENT_LIFO: {
            data: {
              0: {
                executionTime: 88074860,
                puts: 1002808,
                minStealTime: 9223372036854775807,
                steals: 5481,
                takes: 1000319,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 94908070,
                puts: 1006734,
                minStealTime: 9223372036854775807,
                steals: 40988,
                takes: 1000547,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 98877269,
                puts: 1010919,
                minStealTime: 9223372036854775807,
                steals: 25524,
                takes: 1001121,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 100504084,
                puts: 1023858,
                minStealTime: 9223372036854775807,
                steals: 66984,
                takes: 1002340,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 108325223,
                puts: 1030051,
                minStealTime: 9223372036854775807,
                steals: 80993,
                takes: 1002297,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 88074860,
              medianTime: 98877269,
              averageTime: 9.80964743333e7,
              putsAverage: 1013837,
              averageSteals: 44498.6667,
              averageTakes: 1001336
            }
          },
          NEW_B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 100006228,
                puts: 1001875,
                minStealTime: 9223372036854775807,
                steals: 20846,
                takes: 1000762,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 106105626,
                puts: 1002022,
                minStealTime: 9223372036854775807,
                steals: 69247,
                takes: 1001047,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 109620225,
                puts: 1002579,
                minStealTime: 9223372036854775807,
                steals: 31385,
                takes: 1001027,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 116212208,
                puts: 1002982,
                minStealTime: 9223372036854775807,
                steals: 5469,
                takes: 1001286,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 119293547,
                puts: 1003197,
                minStealTime: 9223372036854775807,
                steals: 5363,
                takes: 1001359,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 100006228,
              medianTime: 109620225,
              averageTime: 1.106460196667e8,
              putsAverage: 1002527.6667,
              averageSteals: 35367,
              averageTakes: 1001120
            }
          },
          CHASELEV: {
            data: {
              0: {
                executionTime: 94849318,
                puts: 1016308,
                minStealTime: 9223372036854775807,
                steals: 30381,
                takes: 1000776,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 96698419,
                puts: 1009257,
                minStealTime: 9223372036854775807,
                steals: 14297,
                takes: 1000570,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 102789275,
                puts: 1038702,
                minStealTime: 9223372036854775807,
                steals: 95458,
                takes: 1004258,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 105215542,
                puts: 1011851,
                minStealTime: 9223372036854775807,
                steals: 19445,
                takes: 1000721,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 130315641,
                puts: 1038380,
                minStealTime: 9223372036854775807,
                steals: 94958,
                takes: 1002553,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 94849318,
              medianTime: 102789275,
              averageTime: 1.015677453333e8,
              putsAverage: 1019936.6667,
              averageSteals: 43066.6667,
              averageTakes: 1001849.6667
            }
          },
          WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 89119246,
                puts: 1002104,
                minStealTime: 9223372036854775807,
                steals: 4866,
                takes: 1001088,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 91060356,
                puts: 1001650,
                minStealTime: 9223372036854775807,
                steals: 2996,
                takes: 1000641,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 100221684,
                puts: 1002909,
                minStealTime: 9223372036854775807,
                steals: 5159,
                takes: 1001043,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 102511220,
                puts: 1003866,
                minStealTime: 9223372036854775807,
                steals: 7966,
                takes: 1001813,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 103423150,
                puts: 1003736,
                minStealTime: 9223372036854775807,
                steals: 7314,
                takes: 1001818,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 89119246,
              medianTime: 100221684,
              averageTime: 9.79310866667e7,
              putsAverage: 1002808.3333,
              averageSteals: 5373.6667,
              averageTakes: 1001165.6667
            }
          },
          IDEMPOTENT_FIFO: {
            data: {
              0: {
                executionTime: 98432398,
                puts: 1002237,
                minStealTime: 9223372036854775807,
                steals: 5627,
                takes: 1000218,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 100032711,
                puts: 1001948,
                minStealTime: 9223372036854775807,
                steals: 3880,
                takes: 1000219,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 107319605,
                puts: 1003504,
                minStealTime: 9223372036854775807,
                steals: 64839,
                takes: 1000294,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 111804414,
                puts: 1002756,
                minStealTime: 9223372036854775807,
                steals: 5413,
                takes: 1000154,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 114409831,
                puts: 1002437,
                minStealTime: 9223372036854775807,
                steals: 48967,
                takes: 1000173,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 98432398,
              medianTime: 107319605,
              averageTime: 1.063855766667e8,
              putsAverage: 1002736,
              averageSteals: 24710.6667,
              averageTakes: 1000222.3333
            }
          },
          B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 97489008,
                puts: 1002177,
                minStealTime: 9223372036854775807,
                steals: 5385,
                takes: 1001163,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 97967091,
                puts: 1001688,
                minStealTime: 9223372036854775807,
                steals: 4566,
                takes: 1000891,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 106961041,
                puts: 1003264,
                minStealTime: 9223372036854775807,
                steals: 5500,
                takes: 1001466,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 107659007,
                puts: 1002493,
                minStealTime: 9223372036854775807,
                steals: 5837,
                takes: 1001283,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 109296532,
                puts: 1001729,
                minStealTime: 9223372036854775807,
                steals: 2937,
                takes: 1000744,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 97489008,
              medianTime: 106961041,
              averageTime: 1.04195713e8,
              putsAverage: 1002481.6667,
              averageSteals: 5301,
              averageTakes: 1001213.3333
            }
          }
        },
        'thread-4': {
          IDEMPOTENT_LIFO: {
            data: {
              0: {
                executionTime: 115887667,
                puts: 1003646,
                minStealTime: 9223372036854775807,
                steals: 7253,
                takes: 1000361,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 117603291,
                puts: 1003316,
                minStealTime: 9223372036854775807,
                steals: 6354,
                takes: 1000395,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 118919586,
                puts: 1002558,
                minStealTime: 9223372036854775807,
                steals: 4143,
                takes: 1000333,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 119527805,
                puts: 1001806,
                minStealTime: 9223372036854775807,
                steals: 2098,
                takes: 1000245,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 125200746,
                puts: 1015883,
                minStealTime: 9223372036854775807,
                steals: 43672,
                takes: 1002316,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 115887667,
              medianTime: 118919586,
              averageTime: 1.186835606667e8,
              putsAverage: 1002560,
              averageSteals: 4198.3333,
              averageTakes: 1000324.3333
            }
          },
          NEW_B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 121413605,
                puts: 1000600,
                minStealTime: 9223372036854775807,
                steals: 1599,
                takes: 1000317,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 134227201,
                puts: 1000442,
                minStealTime: 9223372036854775807,
                steals: 675,
                takes: 1000227,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 138799797,
                puts: 1000633,
                minStealTime: 9223372036854775807,
                steals: 903,
                takes: 1000327,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 141395042,
                puts: 1000992,
                minStealTime: 9223372036854775807,
                steals: 1636,
                takes: 1000465,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 149321413,
                puts: 1000870,
                minStealTime: 9223372036854775807,
                steals: 1537,
                takes: 1000426,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 121413605,
              medianTime: 138799797,
              averageTime: 1.3814068e8,
              putsAverage: 1000689,
              averageSteals: 1071.3333,
              averageTakes: 1000339.6667
            }
          },
          CHASELEV: {
            data: {
              0: {
                executionTime: 119104548,
                puts: 1004683,
                minStealTime: 9223372036854775807,
                steals: 6724,
                takes: 1000219,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 121173607,
                puts: 1002352,
                minStealTime: 9223372036854775807,
                steals: 3857,
                takes: 1000147,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 122103492,
                puts: 1004559,
                minStealTime: 9223372036854775807,
                steals: 7201,
                takes: 1000327,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 132467363,
                puts: 1003916,
                minStealTime: 9223372036854775807,
                steals: 7259,
                takes: 1000286,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 133785138,
                puts: 1009220,
                minStealTime: 9223372036854775807,
                steals: 12798,
                takes: 1000336,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 119104548,
              medianTime: 122103492,
              averageTime: 1.25248154e8,
              putsAverage: 1003609,
              averageSteals: 6105.6667,
              averageTakes: 1000253.3333
            }
          },
          WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 109251141,
                puts: 1001000,
                minStealTime: 9223372036854775807,
                steals: 2050,
                takes: 1000501,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 112417987,
                puts: 1001020,
                minStealTime: 9223372036854775807,
                steals: 2017,
                takes: 1000432,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 112961204,
                puts: 1001293,
                minStealTime: 9223372036854775807,
                steals: 2016,
                takes: 1000608,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 123276992,
                puts: 1000986,
                minStealTime: 9223372036854775807,
                steals: 1522,
                takes: 1000422,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 126258366,
                puts: 1001191,
                minStealTime: 9223372036854775807,
                steals: 2053,
                takes: 1000475,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 109251141,
              medianTime: 112961204,
              averageTime: 1.162187276667e8,
              putsAverage: 1001099.6667,
              averageSteals: 1851.6667,
              averageTakes: 1000487.3333
            }
          },
          IDEMPOTENT_FIFO: {
            data: {
              0: {
                executionTime: 105080900,
                puts: 1000413,
                minStealTime: 9223372036854775807,
                steals: 665,
                takes: 1000054,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 122432196,
                puts: 1000602,
                minStealTime: 9223372036854775807,
                steals: 1208,
                takes: 1000085,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 122674471,
                puts: 1000350,
                minStealTime: 9223372036854775807,
                steals: 557,
                takes: 1000047,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 128117622,
                puts: 1000514,
                minStealTime: 9223372036854775807,
                steals: 987,
                takes: 1000057,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 130507487,
                puts: 1000244,
                minStealTime: 9223372036854775807,
                steals: 408,
                takes: 1000030,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 105080900,
              medianTime: 122674471,
              averageTime: 1.244080963333e8,
              putsAverage: 1000488.6667,
              averageSteals: 917.3333,
              averageTakes: 1000063
            }
          },
          B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 120221239,
                puts: 1001410,
                minStealTime: 9223372036854775807,
                steals: 2299,
                takes: 1000671,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 122742326,
                puts: 1000860,
                minStealTime: 9223372036854775807,
                steals: 1230,
                takes: 1000390,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 129855523,
                puts: 1000847,
                minStealTime: 9223372036854775807,
                steals: 1615,
                takes: 1000409,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 137144491,
                puts: 1000680,
                minStealTime: 9223372036854775807,
                steals: 1332,
                takes: 1000382,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 141500956,
                puts: 1001754,
                minStealTime: 9223372036854775807,
                steals: 3002,
                takes: 1000677,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 120221239,
              medianTime: 129855523,
              averageTime: 1.299141133333e8,
              putsAverage: 1000795.6667,
              averageSteals: 1392.3333,
              averageTakes: 1000393.6667
            }
          }
        },
        'thread-3': {
          IDEMPOTENT_LIFO: {
            data: {
              0: {
                executionTime: 125391080,
                puts: 1001470,
                minStealTime: 9223372036854775807,
                steals: 3182,
                takes: 1000199,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 128962449,
                puts: 1003347,
                minStealTime: 9223372036854775807,
                steals: 4770,
                takes: 1000413,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 130588892,
                puts: 1004074,
                minStealTime: 9223372036854775807,
                steals: 5327,
                takes: 1000478,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 142066135,
                puts: 1002460,
                minStealTime: 9223372036854775807,
                steals: 2986,
                takes: 1000245,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 143341630,
                puts: 1003323,
                minStealTime: 9223372036854775807,
                steals: 4713,
                takes: 1000489,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 125391080,
              medianTime: 130588892,
              averageTime: 1.33872492e8,
              putsAverage: 1003293.6667,
              averageSteals: 4361,
              averageTakes: 1000378.6667
            }
          },
          NEW_B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 143429121,
                puts: 1000547,
                minStealTime: 9223372036854775807,
                steals: 893,
                takes: 1000284,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 155118087,
                puts: 1000363,
                minStealTime: 9223372036854775807,
                steals: 561,
                takes: 1000231,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 155742640,
                puts: 1000317,
                minStealTime: 9223372036854775807,
                steals: 454,
                takes: 1000166,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 159506255,
                puts: 1001018,
                minStealTime: 9223372036854775807,
                steals: 1712,
                takes: 1000499,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 170672609,
                puts: 1000177,
                minStealTime: 9223372036854775807,
                steals: 631,
                takes: 1000083,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 143429121,
              medianTime: 155742640,
              averageTime: 1.56788994e8,
              putsAverage: 1000566,
              averageSteals: 909,
              averageTakes: 1000298.6667
            }
          },
          CHASELEV: {
            data: {
              0: {
                executionTime: 132213520,
                puts: 1004409,
                minStealTime: 9223372036854775807,
                steals: 7684,
                takes: 1000406,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 134959623,
                puts: 1003469,
                minStealTime: 9223372036854775807,
                steals: 5150,
                takes: 1000200,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 136976867,
                puts: 1001819,
                minStealTime: 9223372036854775807,
                steals: 2161,
                takes: 1000041,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 158690584,
                puts: 1000565,
                minStealTime: 9223372036854775807,
                steals: 772,
                takes: 1000030,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 168392009,
                puts: 1002020,
                minStealTime: 9223372036854775807,
                steals: 2767,
                takes: 1000080,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 132213520,
              medianTime: 136976867,
              averageTime: 1.43542358e8,
              putsAverage: 1001951,
              averageSteals: 2694.3333,
              averageTakes: 1000090.3333
            }
          },
          WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 132794416,
                puts: 1000299,
                minStealTime: 9223372036854775807,
                steals: 377,
                takes: 1000110,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 138912613,
                puts: 1000858,
                minStealTime: 9223372036854775807,
                steals: 1249,
                takes: 1000395,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 140719185,
                puts: 1000338,
                minStealTime: 9223372036854775807,
                steals: 523,
                takes: 1000136,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 145319550,
                puts: 1000884,
                minStealTime: 9223372036854775807,
                steals: 1266,
                takes: 1000354,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 155041312,
                puts: 1000294,
                minStealTime: 9223372036854775807,
                steals: 392,
                takes: 1000126,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 132794416,
              medianTime: 140719185,
              averageTime: 1.416504493333e8,
              putsAverage: 1000693.3333,
              averageSteals: 1012.6667,
              averageTakes: 1000295
            }
          },
          IDEMPOTENT_FIFO: {
            data: {
              0: {
                executionTime: 141193817,
                puts: 1000352,
                minStealTime: 9223372036854775807,
                steals: 595,
                takes: 1000066,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 150084423,
                puts: 1000401,
                minStealTime: 9223372036854775807,
                steals: 570,
                takes: 1000045,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 150881775,
                puts: 1000528,
                minStealTime: 9223372036854775807,
                steals: 789,
                takes: 1000054,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 153977422,
                puts: 1000520,
                minStealTime: 9223372036854775807,
                steals: 838,
                takes: 1000062,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 164587554,
                puts: 1000425,
                minStealTime: 9223372036854775807,
                steals: 666,
                takes: 1000055,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 141193817,
              medianTime: 150881775,
              averageTime: 1.516478733333e8,
              putsAverage: 1000483,
              averageSteals: 732.3333,
              averageTakes: 1000053.6667
            }
          },
          B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 141788325,
                puts: 1000646,
                minStealTime: 9223372036854775807,
                steals: 793,
                takes: 1000303,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 148705477,
                puts: 1000731,
                minStealTime: 9223372036854775807,
                steals: 1338,
                takes: 1000399,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 159856788,
                puts: 1000677,
                minStealTime: 9223372036854775807,
                steals: 1073,
                takes: 1000343,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 161633831,
                puts: 1000662,
                minStealTime: 9223372036854775807,
                steals: 1163,
                takes: 1000341,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 162761952,
                puts: 1000710,
                minStealTime: 9223372036854775807,
                steals: 1182,
                takes: 1000378,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 141788325,
              medianTime: 159856788,
              averageTime: 1.56732032e8,
              putsAverage: 1000690,
              averageSteals: 1191.3333,
              averageTakes: 1000361
            }
          }
        },
        'thread-6': {
          IDEMPOTENT_LIFO: {
            data: {
              0: {
                executionTime: 88921544,
                puts: 1012718,
                minStealTime: 9223372036854775807,
                steals: 19511,
                takes: 1001267,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 94806745,
                puts: 1004410,
                minStealTime: 9223372036854775807,
                steals: 13023,
                takes: 1000462,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 99767027,
                puts: 1004026,
                minStealTime: 9223372036854775807,
                steals: 22513,
                takes: 1000450,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 102142535,
                puts: 1017768,
                minStealTime: 9223372036854775807,
                steals: 50479,
                takes: 1001924,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 109053859,
                puts: 1006960,
                minStealTime: 9223372036854775807,
                steals: 12362,
                takes: 1000712,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 88921544,
              medianTime: 99767027,
              averageTime: 9.89054356667e7,
              putsAverage: 1008734.6667,
              averageSteals: 28671.6667,
              averageTakes: 1000945.3333
            }
          },
          NEW_B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 111341544,
                puts: 1002223,
                minStealTime: 9223372036854775807,
                steals: 4107,
                takes: 1001066,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 111886380,
                puts: 1003966,
                minStealTime: 9223372036854775807,
                steals: 10041,
                takes: 1001884,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 116231073,
                puts: 1002981,
                minStealTime: 9223372036854775807,
                steals: 7042,
                takes: 1001521,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 122634859,
                puts: 1002454,
                minStealTime: 9223372036854775807,
                steals: 4913,
                takes: 1001201,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 124768447,
                puts: 1002407,
                minStealTime: 9223372036854775807,
                steals: 5872,
                takes: 1001195,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 111341544,
              medianTime: 116231073,
              averageTime: 1.169174373333e8,
              putsAverage: 1003133.6667,
              averageSteals: 7332,
              averageTakes: 1001535.3333
            }
          },
          CHASELEV: {
            data: {
              0: {
                executionTime: 97983177,
                puts: 1003676,
                minStealTime: 9223372036854775807,
                steals: 13769,
                takes: 1000189,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 98146025,
                puts: 1007222,
                minStealTime: 9223372036854775807,
                steals: 15936,
                takes: 1000860,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 106665878,
                puts: 1010908,
                minStealTime: 9223372036854775807,
                steals: 20608,
                takes: 1000982,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 108055588,
                puts: 1012391,
                minStealTime: 9223372036854775807,
                steals: 25661,
                takes: 1000885,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 117719833,
                puts: 1014981,
                minStealTime: 9223372036854775807,
                steals: 19142,
                takes: 1000227,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 97983177,
              medianTime: 106665878,
              averageTime: 1.042891636667e8,
              putsAverage: 1010173.6667,
              averageSteals: 20735,
              averageTakes: 1000909
            }
          },
          WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 94321024,
                puts: 1001866,
                minStealTime: 9223372036854775807,
                steals: 3306,
                takes: 1000765,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 97112868,
                puts: 1001538,
                minStealTime: 9223372036854775807,
                steals: 4263,
                takes: 1000416,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 98705245,
                puts: 1001240,
                minStealTime: 9223372036854775807,
                steals: 1776,
                takes: 1000447,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 100067965,
                puts: 1001384,
                minStealTime: 9223372036854775807,
                steals: 3120,
                takes: 1000664,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 106614589,
                puts: 1001293,
                minStealTime: 9223372036854775807,
                steals: 2238,
                takes: 1000454,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 94321024,
              medianTime: 98705245,
              averageTime: 9.86286926667e7,
              putsAverage: 1001387.3333,
              averageSteals: 3053,
              averageTakes: 1000509
            }
          },
          IDEMPOTENT_FIFO: {
            data: {
              0: {
                executionTime: 98174050,
                puts: 1000977,
                minStealTime: 9223372036854775807,
                steals: 2168,
                takes: 1000083,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 99997554,
                puts: 1002111,
                minStealTime: 9223372036854775807,
                steals: 5307,
                takes: 1000253,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 102629133,
                puts: 1001211,
                minStealTime: 9223372036854775807,
                steals: 3059,
                takes: 1000144,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 104778655,
                puts: 1001549,
                minStealTime: 9223372036854775807,
                steals: 3821,
                takes: 1000160,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 112788520,
                puts: 1001713,
                minStealTime: 9223372036854775807,
                steals: 4095,
                takes: 1000196,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 98174050,
              medianTime: 102629133,
              averageTime: 1.024684473333e8,
              putsAverage: 1001623.6667,
              averageSteals: 4062.3333,
              averageTakes: 1000185.6667
            }
          },
          B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 92890801,
                puts: 1001266,
                minStealTime: 9223372036854775807,
                steals: 2698,
                takes: 1000647,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 98438415,
                puts: 1001330,
                minStealTime: 9223372036854775807,
                steals: 2411,
                takes: 1000627,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 103109200,
                puts: 1003157,
                minStealTime: 9223372036854775807,
                steals: 14740,
                takes: 1001587,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 109378557,
                puts: 1001615,
                minStealTime: 9223372036854775807,
                steals: 3096,
                takes: 1000814,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 114386910,
                puts: 1001876,
                minStealTime: 9223372036854775807,
                steals: 3384,
                takes: 1000821,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 92890801,
              medianTime: 103109200,
              averageTime: 1.036420573333e8,
              putsAverage: 1002034,
              averageSteals: 6749,
              averageTakes: 1001009.3333
            }
          }
        },
        'thread-5': {
          IDEMPOTENT_LIFO: {
            data: {
              0: {
                executionTime: 101703743,
                puts: 1006493,
                minStealTime: 9223372036854775807,
                steals: 15414,
                takes: 1000966,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 103781663,
                puts: 1005840,
                minStealTime: 9223372036854775807,
                steals: 13388,
                takes: 1000697,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 104557715,
                puts: 1004138,
                minStealTime: 9223372036854775807,
                steals: 6024,
                takes: 1000360,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 111656812,
                puts: 1011367,
                minStealTime: 9223372036854775807,
                steals: 28695,
                takes: 1001125,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 122050300,
                puts: 1008154,
                minStealTime: 9223372036854775807,
                steals: 14441,
                takes: 1000818,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 101703743,
              medianTime: 104557715,
              averageTime: 1.066653966667e8,
              putsAverage: 1007115,
              averageSteals: 16035.6667,
              averageTakes: 1000727.3333
            }
          },
          NEW_B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 110194022,
                puts: 1001077,
                minStealTime: 9223372036854775807,
                steals: 2164,
                takes: 1000597,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 114789036,
                puts: 1000949,
                minStealTime: 9223372036854775807,
                steals: 1909,
                takes: 1000503,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 122744285,
                puts: 1001331,
                minStealTime: 9223372036854775807,
                steals: 2405,
                takes: 1000693,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 128517958,
                puts: 1000820,
                minStealTime: 9223372036854775807,
                steals: 1224,
                takes: 1000364,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 133853482,
                puts: 1000457,
                minStealTime: 9223372036854775807,
                steals: 828,
                takes: 1000230,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 110194022,
              medianTime: 122744285,
              averageTime: 1.22017093e8,
              putsAverage: 1001033.3333,
              averageSteals: 1846,
              averageTakes: 1000520
            }
          },
          CHASELEV: {
            data: {
              0: {
                executionTime: 90084811,
                puts: 1002830,
                minStealTime: 9223372036854775807,
                steals: 4701,
                takes: 1000217,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 108417635,
                puts: 1006906,
                minStealTime: 9223372036854775807,
                steals: 17415,
                takes: 1000438,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 118268408,
                puts: 1004112,
                minStealTime: 9223372036854775807,
                steals: 8014,
                takes: 1000355,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 118587077,
                puts: 1002693,
                minStealTime: 9223372036854775807,
                steals: 3576,
                takes: 1000096,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 118715145,
                puts: 1003400,
                minStealTime: 9223372036854775807,
                steals: 6399,
                takes: 1000264,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 90084811,
              medianTime: 118268408,
              averageTime: 1.1509104e8,
              putsAverage: 1004570.3333,
              averageSteals: 9668.3333,
              averageTakes: 1000296.3333
            }
          },
          WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 103217423,
                puts: 1000667,
                minStealTime: 9223372036854775807,
                steals: 1290,
                takes: 1000313,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 103580616,
                puts: 1000957,
                minStealTime: 9223372036854775807,
                steals: 1609,
                takes: 1000426,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 105390250,
                puts: 1001664,
                minStealTime: 9223372036854775807,
                steals: 3368,
                takes: 1000792,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 105694241,
                puts: 1000959,
                minStealTime: 9223372036854775807,
                steals: 1711,
                takes: 1000464,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 124561620,
                puts: 1003455,
                minStealTime: 9223372036854775807,
                steals: 6695,
                takes: 1001683,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 103217423,
              medianTime: 105390250,
              averageTime: 1.04888369e8,
              putsAverage: 1001193.3333,
              averageSteals: 2229.3333,
              averageTakes: 1000560.6667
            }
          },
          IDEMPOTENT_FIFO: {
            data: {
              0: {
                executionTime: 100145410,
                puts: 1000654,
                minStealTime: 9223372036854775807,
                steals: 1687,
                takes: 1000056,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 111136196,
                puts: 1000381,
                minStealTime: 9223372036854775807,
                steals: 794,
                takes: 1000058,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 112097309,
                puts: 1000114,
                minStealTime: 9223372036854775807,
                steals: 168,
                takes: 1000020,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 118315666,
                puts: 1001405,
                minStealTime: 9223372036854775807,
                steals: 3016,
                takes: 1000138,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 120952294,
                puts: 1000551,
                minStealTime: 9223372036854775807,
                steals: 1072,
                takes: 1000066,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 100145410,
              medianTime: 112097309,
              averageTime: 1.138497236667e8,
              putsAverage: 1000633.3333,
              averageSteals: 1326,
              averageTakes: 1000072
            }
          },
          B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 109107131,
                puts: 1000671,
                minStealTime: 9223372036854775807,
                steals: 1449,
                takes: 1000388,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 112310183,
                puts: 1001515,
                minStealTime: 9223372036854775807,
                steals: 52046,
                takes: 1000652,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 115112496,
                puts: 1001880,
                minStealTime: 9223372036854775807,
                steals: 3740,
                takes: 1000951,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 127643491,
                puts: 1000898,
                minStealTime: 9223372036854775807,
                steals: 1559,
                takes: 1000410,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 128277394,
                puts: 1002010,
                minStealTime: 9223372036854775807,
                steals: 4045,
                takes: 1000823,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 109107131,
              medianTime: 115112496,
              averageTime: 1.1835539e8,
              putsAverage: 1001431,
              averageSteals: 19115,
              averageTakes: 1000671
            }
          }
        },
        'thread-0': {
          IDEMPOTENT_LIFO: {
            data: {
              0: {
                executionTime: 327592323,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 332744116,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 335465985,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 337730190,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 349855008,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 327592323,
              medianTime: 335465985,
              averageTime: 3.353134303333e8,
              putsAverage: 1000000,
              averageSteals: 0,
              averageTakes: 1000000
            }
          },
          NEW_B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 508628610,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 509208826,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 516044500,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 521108917,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 523685569,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 508628610,
              medianTime: 516044500,
              averageTime: 5.15454081e8,
              putsAverage: 1000000,
              averageSteals: 0,
              averageTakes: 1000000
            }
          },
          CHASELEV: {
            data: {
              0: {
                executionTime: 302874458,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 325848716,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 349554604,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 372045212,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 375622658,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 302874458,
              medianTime: 349554604,
              averageTime: 3.491495106667e8,
              putsAverage: 1000000,
              averageSteals: 0,
              averageTakes: 1000000
            }
          },
          WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 438000277,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 468420942,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 486882175,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 495837032,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 576991029,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 438000277,
              medianTime: 486882175,
              averageTime: 4.83713383e8,
              putsAverage: 1000000,
              averageSteals: 0,
              averageTakes: 1000000
            }
          },
          IDEMPOTENT_FIFO: {
            data: {
              0: {
                executionTime: 392067763,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 393021844,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 396253991,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 421911562,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 446097037,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 392067763,
              medianTime: 396253991,
              averageTime: 4.037291323333e8,
              putsAverage: 1000000,
              averageSteals: 0,
              averageTakes: 1000000
            }
          },
          B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 459418891,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 465171764,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 465820619,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 472600764,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 475224871,
                puts: 1000000,
                minStealTime: 9223372036854775807,
                steals: 0,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 459418891,
              medianTime: 465820619,
              averageTime: 4.678643823333e8,
              putsAverage: 1000000,
              averageSteals: 0,
              averageTakes: 1000000
            }
          }
        },
        'thread-2': {
          IDEMPOTENT_LIFO: {
            data: {
              0: {
                executionTime: 154460792,
                puts: 1001915,
                minStealTime: 9223372036854775807,
                steals: 3071,
                takes: 1000221,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 156022171,
                puts: 1001750,
                minStealTime: 9223372036854775807,
                steals: 2055,
                takes: 1000252,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 157931639,
                puts: 1001557,
                minStealTime: 9223372036854775807,
                steals: 2053,
                takes: 1000180,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 161499540,
                puts: 1002177,
                minStealTime: 9223372036854775807,
                steals: 2223,
                takes: 1000179,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 165479317,
                puts: 1003857,
                minStealTime: 9223372036854775807,
                steals: 6104,
                takes: 1000633,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 154460792,
              medianTime: 157931639,
              averageTime: 1.5848445e8,
              putsAverage: 1001828,
              averageSteals: 2110.3333,
              averageTakes: 1000203.6667
            }
          },
          NEW_B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 195282851,
                puts: 1000656,
                minStealTime: 9223372036854775807,
                steals: 916,
                takes: 1000457,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 201858955,
                puts: 1000789,
                minStealTime: 9223372036854775807,
                steals: 1087,
                takes: 1000391,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 205590951,
                puts: 1001971,
                minStealTime: 9223372036854775807,
                steals: 2916,
                takes: 1000803,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 207686495,
                puts: 1000370,
                minStealTime: 9223372036854775807,
                steals: 495,
                takes: 1000207,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 210630874,
                puts: 1000443,
                minStealTime: 9223372036854775807,
                steals: 597,
                takes: 1000262,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 195282851,
              medianTime: 205590951,
              averageTime: 2.05045467e8,
              putsAverage: 1001043.3333,
              averageSteals: 1499.3333,
              averageTakes: 1000467
            }
          },
          CHASELEV: {
            data: {
              0: {
                executionTime: 155205823,
                puts: 1002845,
                minStealTime: 9223372036854775807,
                steals: 3095,
                takes: 1000040,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 163586151,
                puts: 1003104,
                minStealTime: 9223372036854775807,
                steals: 3822,
                takes: 1000080,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 170291265,
                puts: 1007755,
                minStealTime: 9223372036854775807,
                steals: 12160,
                takes: 1000385,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 171905034,
                puts: 1002320,
                minStealTime: 9223372036854775807,
                steals: 2824,
                takes: 1000038,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 191559506,
                puts: 1001045,
                minStealTime: 9223372036854775807,
                steals: 1378,
                takes: 1000025,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 155205823,
              medianTime: 170291265,
              averageTime: 1.6859415e8,
              putsAverage: 1004393,
              averageSteals: 6268.6667,
              averageTakes: 1000167.6667
            }
          },
          WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 178807138,
                puts: 1000109,
                minStealTime: 9223372036854775807,
                steals: 145,
                takes: 1000044,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 185065666,
                puts: 1000567,
                minStealTime: 9223372036854775807,
                steals: 792,
                takes: 1000289,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 189153658,
                puts: 1000377,
                minStealTime: 9223372036854775807,
                steals: 490,
                takes: 1000150,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 200995411,
                puts: 1000230,
                minStealTime: 9223372036854775807,
                steals: 256,
                takes: 1000079,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 213809001,
                puts: 1000833,
                minStealTime: 9223372036854775807,
                steals: 1162,
                takes: 1000318,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 178807138,
              medianTime: 189153658,
              averageTime: 1.91738245e8,
              putsAverage: 1000391.3333,
              averageSteals: 512.6667,
              averageTakes: 1000172.6667
            }
          },
          IDEMPOTENT_FIFO: {
            data: {
              0: {
                executionTime: 166290792,
                puts: 1000237,
                minStealTime: 9223372036854775807,
                steals: 344,
                takes: 1000025,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 173938325,
                puts: 1000338,
                minStealTime: 9223372036854775807,
                steals: 479,
                takes: 1000050,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 175027137,
                puts: 1000346,
                minStealTime: 9223372036854775807,
                steals: 520,
                takes: 1000036,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 177878458,
                puts: 1000876,
                minStealTime: 9223372036854775807,
                steals: 1210,
                takes: 1000092,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 180593464,
                puts: 1000256,
                minStealTime: 9223372036854775807,
                steals: 343,
                takes: 1000031,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 166290792,
              medianTime: 175027137,
              averageTime: 1.7561464e8,
              putsAverage: 1000520,
              averageSteals: 736.3333,
              averageTakes: 1000059.3333
            }
          },
          B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 183569402,
                puts: 1000566,
                minStealTime: 9223372036854775807,
                steals: 774,
                takes: 1000258,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 188969091,
                puts: 1000474,
                minStealTime: 9223372036854775807,
                steals: 701,
                takes: 1000252,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 191214765,
                puts: 1000843,
                minStealTime: 9223372036854775807,
                steals: 1164,
                takes: 1000393,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 201786875,
                puts: 1000181,
                minStealTime: 9223372036854775807,
                steals: 260,
                takes: 1000091,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 203795354,
                puts: 1000505,
                minStealTime: 9223372036854775807,
                steals: 542,
                takes: 1000217,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 183569402,
              medianTime: 191214765,
              averageTime: 1.939902436667e8,
              putsAverage: 1000499.3333,
              averageSteals: 708.3333,
              averageTakes: 1000245.3333
            }
          }
        },
        'thread-1': {
          IDEMPOTENT_LIFO: {
            data: {
              0: {
                executionTime: 195384585,
                puts: 1003304,
                minStealTime: 9223372036854775807,
                steals: 3279,
                takes: 1000413,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 196049239,
                puts: 1004008,
                minStealTime: 9223372036854775807,
                steals: 3997,
                takes: 1000294,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 212646188,
                puts: 1002648,
                minStealTime: 9223372036854775807,
                steals: 2635,
                takes: 1000250,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 217309940,
                puts: 1001073,
                minStealTime: 9223372036854775807,
                steals: 1072,
                takes: 1000099,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 217321610,
                puts: 1001964,
                minStealTime: 9223372036854775807,
                steals: 1960,
                takes: 1000265,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 195384585,
              medianTime: 212646188,
              averageTime: 2.086684556667e8,
              putsAverage: 1002576.3333,
              averageSteals: 2568,
              averageTakes: 1000214.3333
            }
          },
          NEW_B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 277014733,
                puts: 1000171,
                minStealTime: 9223372036854775807,
                steals: 167,
                takes: 1000090,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 281075547,
                puts: 1000537,
                minStealTime: 9223372036854775807,
                steals: 526,
                takes: 1000201,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 286346283,
                puts: 1000063,
                minStealTime: 9223372036854775807,
                steals: 60,
                takes: 1000028,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 291696940,
                puts: 1000486,
                minStealTime: 9223372036854775807,
                steals: 481,
                takes: 1000141,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 303792374,
                puts: 1000135,
                minStealTime: 9223372036854775807,
                steals: 141,
                takes: 1000069,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 277014733,
              medianTime: 286346283,
              averageTime: 2.863729233333e8,
              putsAverage: 1000362,
              averageSteals: 355.6667,
              averageTakes: 1000123.3333
            }
          },
          CHASELEV: {
            data: {
              0: {
                executionTime: 213085759,
                puts: 1000269,
                minStealTime: 9223372036854775807,
                steals: 270,
                takes: 1000001,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 217003170,
                puts: 1001194,
                minStealTime: 9223372036854775807,
                steals: 1196,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 224222670,
                puts: 1001785,
                minStealTime: 9223372036854775807,
                steals: 1784,
                takes: 1000000,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 230294205,
                puts: 1001200,
                minStealTime: 9223372036854775807,
                steals: 1202,
                takes: 1000001,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 243127378,
                puts: 1000938,
                minStealTime: 9223372036854775807,
                steals: 941,
                takes: 1000001,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 213085759,
              medianTime: 224222670,
              averageTime: 2.23840015e8,
              putsAverage: 1001393,
              averageSteals: 1394,
              averageTakes: 1000000.3333
            }
          },
          WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 265993180,
                puts: 1000150,
                minStealTime: 9223372036854775807,
                steals: 147,
                takes: 1000049,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 267781820,
                puts: 1000109,
                minStealTime: 9223372036854775807,
                steals: 106,
                takes: 1000035,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 273114351,
                puts: 1000236,
                minStealTime: 9223372036854775807,
                steals: 231,
                takes: 1000082,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 275668762,
                puts: 1000345,
                minStealTime: 9223372036854775807,
                steals: 340,
                takes: 1000098,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 277652223,
                puts: 1000045,
                minStealTime: 9223372036854775807,
                steals: 45,
                takes: 1000016,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 265993180,
              medianTime: 273114351,
              averageTime: 2.72188311e8,
              putsAverage: 1000230,
              averageSteals: 225.6667,
              averageTakes: 1000071.6667
            }
          },
          IDEMPOTENT_FIFO: {
            data: {
              0: {
                executionTime: 229453182,
                puts: 1000391,
                minStealTime: 9223372036854775807,
                steals: 389,
                takes: 1000025,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 237117946,
                puts: 1000105,
                minStealTime: 9223372036854775807,
                steals: 102,
                takes: 1000012,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 240302304,
                puts: 1000150,
                minStealTime: 9223372036854775807,
                steals: 145,
                takes: 1000011,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 246405269,
                puts: 1000139,
                minStealTime: 9223372036854775807,
                steals: 134,
                takes: 1000030,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 248542199,
                puts: 1000125,
                minStealTime: 9223372036854775807,
                steals: 125,
                takes: 1000010,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 229453182,
              medianTime: 240302304,
              averageTime: 2.41275173e8,
              putsAverage: 1000131.3333,
              averageSteals: 127,
              averageTakes: 1000017.6667
            }
          },
          B_WS_NC_MULT_LA: {
            data: {
              0: {
                executionTime: 272866853,
                puts: 1000386,
                minStealTime: 9223372036854775807,
                steals: 372,
                takes: 1000159,
                maxStealTime: 0,
                avgStealTime: 0
              },
              1: {
                executionTime: 274032974,
                puts: 1000192,
                minStealTime: 9223372036854775807,
                steals: 192,
                takes: 1000087,
                maxStealTime: 0,
                avgStealTime: 0
              },
              2: {
                executionTime: 277820276,
                puts: 1000116,
                minStealTime: 9223372036854775807,
                steals: 112,
                takes: 1000067,
                maxStealTime: 0,
                avgStealTime: 0
              },
              3: {
                executionTime: 284853307,
                puts: 1000096,
                minStealTime: 9223372036854775807,
                steals: 91,
                takes: 1000037,
                maxStealTime: 0,
                avgStealTime: 0
              },
              4: {
                executionTime: 290177097,
                puts: 1000191,
                minStealTime: 9223372036854775807,
                steals: 189,
                takes: 1000107,
                maxStealTime: 0,
                avgStealTime: 0
              }
            },
            statistics: {
              bestTime: 272866853,
              medianTime: 277820276,
              averageTime: 2.789021856667e8,
              putsAverage: 1000134.6667,
              averageSteals: 131.6667,
              averageTakes: 1000063.6667
            }
          }
        }
      },
      stealTime: false,
      stepSpanningTree: 'COUNTER',
      processors: 8,
      vertexSize: 100,
      iterations: 5,
      structSize: 4096
    }
  });
};

export default mock;
