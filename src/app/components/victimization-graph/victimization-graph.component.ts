import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { VictimizationService } from '../../service/victimization.service';
import { Victimization } from '../../model/victimization.model';
import { IntermediaryService } from 'src/app/service/intermediary.service';

@Component({
  selector: 'victimization-graph',
  templateUrl: './victimization-graph.component.html'
})
export class VictimizationGraphComponent implements OnChanges {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Victimization rate by state',
      fontSize: 30,
      fontFamily: 'Lucida Console'
    },
    legend: {
      labels: {
        usePointStyle: true,
      }
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'year',
          fontSize: 20,
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'rate',
          fontSize: 20,
        }
      }]
    }
  };
  public barChartLabels: Array<string> = [];
  public readonly barChartType = 'bar';
  public readonly barChartLegend = true;
  public barChartData: Array<any> = [];
  public victimizations: Array<Victimization> = [];
  public readonly barChartColors: Array<string> = ['rgba(58, 150, 58, 1)', 'rgba(36, 130, 223, 1)',
    'rgba(243, 103, 243, 1)', 'rgba(255, 255, 255, 1)'];

  @Input() idState: number;

  constructor(
    private victimizationService: VictimizationService,
    private intermediaryService: IntermediaryService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.prepareData();

  }

  public prepareData() {
    this.victimizationService.getVictimizationsByState(this.idState)
      .subscribe((victimizations: Array<Victimization>) => {
        this.victimizations = victimizations;
        this.prepareGraph();
      }, (errorResponse) => { });
  }

  public prepareGraph() {
    this.barChartLabels = [];
    let allData: Array<number> = [];
    let menData: Array<number> = [];
    let womenData: Array<number> = [];
    if (this.victimizations.length > 0) {
      for (let i = 0; i < 8; i++) {
        if (this.intermediaryService.booleansYears[i]) {
          this.barChartLabels.push("" + this.victimizations[i].year)
          allData.push(this.victimizations[i].rateAll);
          menData.push(this.victimizations[i].rateMen);
          womenData.push(this.victimizations[i].rateWomen);
        }
      }
      this.barChartData = [
        {
          data: allData, label: 'All', backgroundColor: this.barChartColors[0], hoverBackgroundColor: this.barChartColors[0],
          hoverBorderColor: this.barChartColors[3], hoverBorderWidth: 2
        },
        {
          data: menData, label: 'Men', backgroundColor: this.barChartColors[1], hoverBackgroundColor: this.barChartColors[1],
          hoverBorderColor: this.barChartColors[3], hoverBorderWidth: 2
        },
        {
          data: womenData, label: 'Women', backgroundColor: this.barChartColors[2], hoverBackgroundColor: this.barChartColors[2],
          hoverBorderColor: this.barChartColors[3], hoverBorderWidth: 2
        },
      ];
    }
  }

}
