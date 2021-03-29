const nr_of_particles = 100;
const particles = [];
const field = [];
const size = 20;
const bgcolor = 'rgba(11, 73, 167, 1)';
const white1 = 'rgba(255,255,255, 1)';
const white2 = 'rgba(255,255,255, 0.1)';

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for (let i = 0; i < nr_of_particles; i++) {
        particles.push(new Particle());
    }

    createField();
    background(bgcolor);

    drawText();
}

function draw() {
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
        particle.setForceFromField(field);
    });

    if (frameCount % 10 === 0) {
        drawText();
    }
}

function drawText() {
    fill(white2);
    strokeWeight(0);
    textSize(width / 15);
    textAlign(CENTER);
    textAlign('Lora');
    text('#003DayChallenge', width / 2, height / 2);
}

class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height)); // 隨意一個點
        this.prevPos = this.pos.copy(); // 記錄前一個點

        this.vel = createVector(0, 0); // 累計 this.acc 並 .limit()
        this.acc = createVector(0, 0); // 從 field 得到的數值;每次會reset

        this.maxSpeed = 3;
    }

    // 準備畫下去的素材
    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed); // 限制增加最大值
        this.prevPos = this.pos;
        this.pos.add(this.vel);
        this.acc.mult(0); // reset
        this.checkEdges();
    }

    // 超越邊界
    checkEdges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.prevPos = this.pos.copy();
        }

        if (this.pos.x < 0) {
            this.pos.x = width;
            this.prevPos = this.pos.copy();
        }

        if (this.pos.y > height) {
            this.pos.y = 0;
            this.prevPos = this.pos.copy();
        }

        if (this.pos.y < 0) {
            this.pos.y = height;
            this.prevPos = this.pos.copy();
        }
    }

    // 畫下去
    draw() {
        stroke(random() > 0.5 < 0.5 ? white1 : bgcolor); // 隨機設定線段顏色
        strokeWeight(1); // 寬度
        line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    // 得到一個idx
    setForceFromField(field) {
        const x = Math.floor(this.pos.x / size);
        const y = Math.floor(this.pos.y / size);
        const idx = y + x * size;
        const force = field[idx];
        this.applyForce(force);
    }
}

// 利用Perlin噪聲 生成一個 array
function createField() {
    const rows = Math.floor(width / size);
    const cols = Math.floor(height / size);
    let x_noise = 0;
    for (let i = 0; i < rows; i++) {
        let y_noise = 0;
        for (let j = 0; j < cols; j++) {
            const angle = noise(x_noise, y_noise) * TWO_PI * 10;
            const vec = p5.Vector.fromAngle(angle);
            vec.setMag(0.3);
            field.push(vec);
            y_noise += 0.1;
        }
        x_noise += 0.1;
    }
}
