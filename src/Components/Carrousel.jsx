import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

class Carrousel extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          'http://cdn2.tstatic.net/aceh/foto/bank/images/serangga_20170504_102159.jpg',
          'http://hartonomall.com/wp-content/uploads/2016/10/5-Makanan-Murah-Yang-Bisa-Dicicipin-Waktu-Nge-mall.jpg',
          'https://galena-indonesia.s3-ap-southeast-1.amazonaws.com/pending/3114/5566/916e10230247043e438548a9bff7ff7b'
        ]
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) =>
              console.log(`slide from ${from} to ${to}`)
            }
            afterChange={index => console.log('slide to', index)}>
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{
                  display: 'inline-block',
                  width: '100%',
                  height: this.state.imgHeight
                }}>
                <img
                  src={`${val}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </div>
    );
  }
}

export default Carrousel;
