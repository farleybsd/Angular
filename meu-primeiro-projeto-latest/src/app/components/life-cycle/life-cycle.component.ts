import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, signal, AfterViewInit, viewChild, ElementRef, ViewChild, AfterContentInit, ContentChild, AfterContentChecked, AfterViewChecked, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { timer } from 'rxjs';
import {takeUntilDestroyed } from '@angular/core/rxjs-interop'
@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LifeCycleComponent implements 
OnChanges,OnInit,DoCheck,AfterViewInit,AfterContentInit,AfterContentChecked,AfterViewChecked,OnDestroy {
  public myNumber = signal(0) ;

  @Input() set inputmyNumber(value:number){
    this.myNumber.set(value)
  };

  public myText = signal('Rufinao');
  @ViewChild('content') public content! : ElementRef;
  @ContentChild('text') text! : ElementRef;

  // private destroy$ =  timer(0,1000).pipe(
  //   takeUntilDestroyed()
  // ).subscribe({
  //   next: (next) => console.log('next',next),
  //   error: (error) => console.log('error',error),
  //   complete: () => console.log('complete')
  // })

  // Construtor Incializador
  constructor(){}

  // Changes Detections
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges',changes)
    // if(changes['myNumber'].previousValue ===2){
    //   alert('Deu Bom!')
    // }
  }

  ngOnInit(): void {
   // console.log('ngOnInit')
    //console.log(this.content.nativeElement.innerText)
  }

  ngDoCheck(): void {
    //console.log('ngDoCheck')
  }


  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit')
    // console.log(this.text.nativeElement.innerText)
  }

  ngAfterContentChecked(): void {
   // console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    //  console.log('ngAfterViewInit')
    //  console.log(this.content.nativeElement.innerText)
    //  this.content.nativeElement.innerText = "Farley"
    //  console.log(this.text.nativeElement.innerText)
  }
  
  ngAfterViewChecked(): void {
   // console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    //this.destroy$.unsubscribe();
  }
}


